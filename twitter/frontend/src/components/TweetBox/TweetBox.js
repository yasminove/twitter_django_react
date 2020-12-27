import React, { useState, useEffect, Component } from 'react';

import './TweetBox.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/posts';

import Image from '../../images/yasmin.jpeg';
import { Avatar, Button } from '@material-ui/core';

// import db from '../firbase'
// let docId = '';
// import axios from 'axios';

class TweetBox extends Component {
  // const [tweet, setTweet] = useState('');
  static propTypes = {
    posts: PropTypes.array,
    addPost: PropTypes.func.isRequired,
  };

  state = {
    tweet: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const content = {
      content: this.state.tweet,
    };
    // const { tweet } = this.state;
    // const content = { tweet }
    this.props.addPost(content);
    this.setState({
      tweet: '',
    });
  };

  render() {
    const tweet = this.state.tweet;
    // const addTweet = (e) => {
    //   // e.preventDefault();
    //   const content = {
    //     content: this.state.tweetText,
    //   };
    //   this.props.addPost(content);
    // };
    console.log(this.state, 'this.state');
    return (
      <div className='tweetBox'>
        {/* onSubmit={addTweet} */}
        <form action='' onSubmit={this.onSubmit}>
          <div className='tweetBox__input'>
            <Avatar src={Image} />
            {/*  */}
            <input
              type='text'
              placeholder="What's happening"
              name='tweet'
              onChange={this.onChange}
              value={tweet}
            />
          </div>
          {/* <input className="tweetBox__image" type='text' placeholder="Optional: Add an image" /> */}
          {/*  */}
          {tweet.length > 0 ? (
            <Button type='submit' className='tweetBox_btn' variant='contained'>
              Tweet
            </Button>
          ) : (
            <Button
              type='submit'
              className='tweetBox_btn__disabled'
              variant='contained'
            >
              Tweet
            </Button>
          )}
        </form>
      </div>
    );
  }
  // const composeTweet = (e) => {
  //   setTweet(e.target.value);
  //   // setTweet('');
  // };

  // console.log('tweet77', tweet);

  //   const addTweet = () => {
  //     console.log('hiii');
  //     console.log(tweet.length, 'tweet.length');
  //     if(tweet.length > 0){
  //       db.collection('posts').add({
  //         displayName: "Yasmin Hillis",
  //         profilePic: "https://avatars0.githubusercontent.com/u/30685524?s=460&u=fb45f5dc18c7fc8537141e118f0bedb2c5af4348&v=4",
  //         text: tweet,
  //         username: "yasminhillis",
  //   }).then(docRef => {
  //         console.log(docRef.id, 'docRef');
  //         docId = docRef.id;
  //         console.log(docId, 'docId');
  //         console.log(typeof docId, 'docId');
  //       })
  //       setTweet("")
  //     }

  //   }

  // const addTweet = (e) => {
  //   console.log('here');
  //   const content = {
  //     content: tweet,
  //   };
  //   axios
  //     .post('/api/tweets/', content)
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       if (err.request) {
  //         console.log(err.request);
  //       }
  //       if (err.response) {
  //         console.log(err.response);
  //       }
  //       console.log(err, 'err');
  //     });
  // };
}
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { addPost })(TweetBox);
// export { docId };
