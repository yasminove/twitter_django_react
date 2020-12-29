import React, { Component, Fragment } from 'react';
// import { withAlert } from 'react-alert';
import { withAlert } from 'react-alert';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidMount() {
    console.log(this.props, 'this.props');
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps, 'prevProps');

    // console.log(this.props, 'this.props');
    // this.props.alert.show('It works');
    const { error, alert, messages } = this.props;
    console.log(error.msg.non_field_errors, 'error');
    console.log(error !== prevProps.error, 'error !== prevProps.error');
    if (error !== prevProps.error) {
      // alert.error('an error happened');
      if (error.msg.content) alert.error(`Content: ${error.msg.content}`);
      if (error.msg.username) alert.error(error.msg.username);
      if(error.msg.non_field_errors) {
        console.log(error.msg.non_field_errors, 'error.msg.on_field_errors');
        alert.error('user does not exist')
      }
    }
    if(messages) console.log(messages, 'messages');
    console.log(messages !== prevProps.messages);
    if (messages !== prevProps.messages) {
      if(messages.postAdded) alert.success(messages.postAdded);
      if(messages.passwordNotMatch) alert.error(messages.passwordNotMatch);
      
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  messages: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
