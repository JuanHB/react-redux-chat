import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Toggle from 'material-ui/Toggle';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import SubHeader from 'material-ui/Subheader';
import { withRouter } from 'react-router-dom'

class Config extends Component {
  render() {
    return (
      <div className="wrapper">

        <SubHeader> Color Theme </SubHeader>
        <RadioButtonGroup>
          <RadioButton
            label="Light"
            value="ligth"
          />
          <RadioButton
            label="Dark"
            value="dark"
          />
        </RadioButtonGroup>

        <SubHeader> Time format </SubHeader>
        <RadioButtonGroup>
          <RadioButton
            label="24 hours"
            value="24"
          />
          <RadioButton
            label="12 hours"
            value="12"
          />
        </RadioButtonGroup>

        <SubHeader> Ctrl + Enter to send </SubHeader>
        <Toggle
          label="Enabled"
          labelPosition="right"
        />
        <SubHeader> Show date on messages </SubHeader>
        <Toggle
          label="Enabled"
          labelPosition="right"
        />
        <SubHeader> Play message sounds  </SubHeader>
        <Toggle
          label="Enabled"
          labelPosition="right"
        />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  }
};

export default withRouter(connect(mapStateToProps, actions)(Config));
