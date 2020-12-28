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
import Register from './accounts/Register';
import Login from './accounts/Login';

import PrivateRoute from './common/PrivateRoute';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import store from '../store';
import { Provider } from 'react-redux';

import {loadUser}from '../actions/auth'

import Alerts from './layout/Alerts';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
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
                <PrivateRoute exact path='/' component={MainPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
