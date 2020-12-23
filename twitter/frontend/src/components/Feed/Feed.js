import React, { Component, useEffect, useState } from 'react';
import Home from '../Home/Home.js';
import TweetBox from '../TweetBox/TweetBox.js';
import './Feed.css';
import FilpMove from 'react-flip-move';
import axios from 'axios';
// import db from '../firbase'
// from .models import Post;

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/posts';

import Image from '../../images/yasmin.jpeg';

import Tweet from '../Tweet/Tweet.js';
import posts from '../../reducers/posts.js';

class Feed extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getPosts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPosts();
  }
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('api/tweets')
  //     .then((res) => setPosts(res.data))
  //     .catch((err) => console.log('err', err));
  // }, []);

  // console.log(posts, 'posts77777');

  // componentDidMount() {
  //   // console.log(db.collection('posts'), 'db.collection(posts)');
  //   db.collection('posts').onSnapshot(snapshot => {
  //     // console.log(snapshot.docs, 'snapshot.docs');
  //     snapshot.docs.map(doc => {
  //       // console.log(doc, 'doc');
  //       // console.log(doc.data(), 'doc.data()');

  //     })
  //   })
  // }
  //   useEffect(() => {

  //       db.collection('posts').onSnapshot(snapshot => {
  //         setPosts(
  //           snapshot.docs.map(doc => {
  //             console.log(doc.data(), 'doc.data()');
  //             return doc.data()
  //           })
  //         )
  //         snapshot.docs.map(doc => {
  //           console.log(doc.data(), 'doc.data()');

  //         })
  //       })

  //   }, []);

  //   console.log(posts, 'posts');
  render() {
    return (
      <div className='feed'>
        <Home />
        <TweetBox />
        {this.props.posts.reverse().map((post) => (
          <Tweet
            key={post.id}
            profilePic={post.profile_pic}
            displayName={post.displayName}
            username={post.username}
            text={post.content}
          />
        ))}

        {/* {posts.map((post) => (
          <>
            <FilpMove>
              <Tweet
                key={post.text}
                profilePic={post.profilePic}
                displayName={post.displayName}
                username={post.username}
                text={post.text}
                image={post.image}
                heartCount={post.heart}
              />
            </FilpMove>
          </>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPosts })(Feed);
