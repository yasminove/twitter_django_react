import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__search">
                <span><SearchIcon style={{color: '#656565', paddingTop: '4px'}}/></span>
                <input className="widgets__searchInput" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__wrapper">
                <TwitterTweetEmbed tweetId={'804413175122706432'}/>
               
                <TwitterTimelineEmbed sourceType="Yasmin Hillis" screenName="HillisYasmin"/>

                <TwitterShareButton options={{text: 'yasmin is awesome'}}/>
            </div>

        </div>
    )
}

export default Widgets;