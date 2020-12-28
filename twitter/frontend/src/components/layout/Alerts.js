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
    console.log(error, 'error');
    console.log(error !== prevProps.error, 'error !== prevProps.error');
    if (error !== prevProps.error) {
      // alert.error('an error happened');
      if (error.msg.content) alert.error(`Content: ${error.msg.content}`);
    }

    if (messages !== prevProps.messages) {
      if (messages.postAdded) alert.success(messages.postAdded);
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
