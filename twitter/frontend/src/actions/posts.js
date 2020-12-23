import axios from 'axios';

import { GET_POSTS, ADD_POST } from './types';

export const getPosts = () => (dispatch) => {
  axios
    .get('/api/tweets/')
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log('Err', err));
};

export const addPost = (post) => (dispatch) => {
  axios
    .post('/api/tweets/', post)
    .then((res) => {
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log('Err', err));
};
