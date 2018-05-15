import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { withRouter } from 'react-router-dom'

class Config extends Component {
  render() {
    return (<div className="wrapper">Config page, yay...</div>);
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  }
};

export default withRouter(connect(mapStateToProps, actions)(Config));
