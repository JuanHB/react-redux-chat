import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions/Actions';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import RadioOptions from './RadioOptions/RadioOptions';

class ConfigPanel extends Component {

  constructor(){
    super();
    this.handleRadioOptionChange = this.handleRadioOptionChange.bind(this);
  }

  renderToggleOptionsBlock(){
    return (
      <List>
        <Divider />
        <ListItem primaryText="Ctrl + Enter" secondaryText="To send messages" rightToggle={<Toggle />} />
        <Divider />
        <ListItem primaryText="Dates" secondaryText="Show messages dates" rightToggle={<Toggle />} />
        <Divider />
        <ListItem primaryText="Sounds" secondaryText="Message sounds" rightToggle={<Toggle />} />
      </List>
    );
  }

  handleRadioOptionChange(event, value, option) {
    this.props.updateConfigOption(value, option);
  }

  render() {
    const
      { config } = this.props,
      { theme, timeFormat } = config;

    return (
      <PanelWrapper>
        { <RadioOptions {...theme } stateProperty="theme" onChange={this.handleRadioOptionChange} /> }
        { <RadioOptions {...timeFormat } stateProperty="timeFormat" onChange={ this.handleRadioOptionChange } />}
        { this.renderToggleOptionsBlock() }
      </PanelWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  }
};

export default withRouter(connect(mapStateToProps, actions)(ConfigPanel));
