import React, { useState, forwardRef } from 'react';
import './Tweet.css';
import { Avatar } from '@material-ui/core';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import db from '../firbase';

import { docId } from '../TweetBox/TweetBox';

import Person from '../../images/person.jpg';

const Tweet = forwardRef(
  ({ profilePic, displayName, username, text, image, heartCount }, ref) => {
    const [heartConut, setHeartConut] = useState(0);

    const handleHeartClick = () => {
      // console.log('hiii');
      setHeartConut(1);
      // console.log(docId, 'docId');
      // if(docId){
      //     setHeartConut(heartConut + 1);
      //     // const doc = db.collection("posts").doc(docId);
      //     // console.log(doc, 'doc777777');
      //     // console.log(doc.id, 'doc777777');
      //     const doc = db.collection('posts').doc(docId);
      //     // console.log(heartConut, 'heartConut');
      //     console.log(heartConut, 'heartConutttttttttttttttttttt');
      //     doc.update({
      //       heart: heartConut + 1
      //     });
      //     console.log(doc, 'doc');
      // } else {
      //     setHeartConut(heartConut + 1);
      // }
    };
    console.log(heartConut, 'heartCount77');

    // console.log(heartConut, 'heartConutheartConutheartConutheartConutheartConut');

    const handleFilledHeartClick = () => {
      setHeartConut(heartConut - 1);
    };

    console.log(heartConut, 'heartConut');
    return (
      <div className='tweet' ref={ref}>
        <div className='tweet__wrapper'>
          <div className='tweet__header'>
            <Avatar className='tweet__image' src={profilePic} />
          </div>

          <div className='tweet__text'>
            <h2 className='tweet__displayName'>
              {displayName}
              <span className='tweet__username'>@{username}</span>
            </h2>
            <p className='tweet__content'>{text}</p>
            {image ? (
              <img
                className='tweet__image'
                style={{ width: '201px', height: '175px' }}
                src={image}
              />
            ) : null}
          </div>
        </div>
        <div className='tweet__icons'>
          <ChatBubbleOutlineIcon />

          <RepeatIcon className='repeat__icon' />
          {heartConut === 0 || heartConut % 2 === 0 ? (
            <FavoriteBorderIcon
              className='favorite__icon'
              onClick={handleHeartClick}
            />
          ) : (
            <FavoriteIcon
              onClick={handleFilledHeartClick}
              style={{ color: '#e0245e' }}
            />
          )}
          {heartConut > 0 ? (
            <span className='favorite__icon' style={{ marginLeft: '-162px' }}>
              {heartConut}
            </span>
          ) : null}
          {/* { heartConut > 0 ?  <span style={{marginLeft: '-107px'}}>{heartCount}</span> : null} */}
          {heartConut >= 1000 ? (
            <span style={{ marginLeft: '-107px' }}>{heartCount / 1000}</span>
          ) : null}
          <PublishIcon />
        </div>
      </div>
    );
  }
);

export default Tweet;
