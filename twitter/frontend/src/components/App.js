import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import Header from './layout/Header';

import store from '../store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className='app'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
