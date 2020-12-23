import React from 'react';

import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';

import { Button } from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon className="sidebar__twitterIcon"/>
      <div>
        <SidebarOption active text='Home' Icon={HomeIcon} />
        <SidebarOption text='Explore' Icon={SearchIcon} />
        <SidebarOption text='Notifications' Icon={NotificationsNoneIcon} />
        <SidebarOption text='Messages' Icon={MailOutlineIcon} />
        <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
        <SidebarOption text='List' Icon={ListAltIcon} />
        <SidebarOption text='Profile' Icon={PersonOutlineIcon} />
        <SidebarOption text='More' Icon={MoreHorizIcon} />
        <Button variant="contain" className="sidebar__button">Tweet</Button>
      </div>
    </div>
  );
};

export default Sidebar;