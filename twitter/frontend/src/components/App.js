import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';

import Header from './layout/Header';
import MainPage from './MainPage/MainPage';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import store from '../store';
import { Provider } from 'react-redux';

import Alerts from './layout/Alerts';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              {/* <MainPage /> */}
              <Switch>
                <Route exact path='/' component={MainPage} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
