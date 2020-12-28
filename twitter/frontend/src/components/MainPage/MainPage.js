import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Widgets from '../Widgets/Widgets';

import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div className='app'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    );
  }
}

export default MainPage;
