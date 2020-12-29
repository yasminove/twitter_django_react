import axios from 'axios';

import { GET_POSTS, ADD_POST, GET_MESSAGE, CREATE_MESSAGE } from './types';

import { tokenConfig } from './auth'

import { createMessage, returnError } from './messages';

export const getPosts = () => (dispatch, getState) => {
  axios
    .get('/api/tweets/', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err, 'err get post');
      dispatch(returnError(err.response.data, err.response.status));
    });
};

export const addPost = (post) => (dispatch, getState) => {
  axios
    .post('/api/tweets/', post, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ postAdded: 'post Added' }));
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log('Err', err.response.data, err.response.status)
      // const errors = {
      //   msg: err.response.data,
      //   status: err.response.status,
      // };
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: errors,
      // });

      dispatch(returnError(err.response.data, err.response.status));
    });
};
