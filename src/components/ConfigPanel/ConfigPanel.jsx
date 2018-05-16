import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions/Actions';
import Toggle from 'material-ui/Toggle';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import SubHeader from 'material-ui/Subheader';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import './ConfigPanel.scss';

class ConfigPanel extends Component {

  constructor(){
    super();
    this.state = {}
  }

  renderThemeColorConfigBlock() {
    return (
      <div>
        <SubHeader>Theme Color</SubHeader>
        <RadioButtonGroup name="selectedTheme" className="radio-group">
          <RadioButton label="Light" value="light" className="radio" />
          <RadioButton label="Dark" value="dark" className="radio" />
        </RadioButtonGroup>
      </div>
    );
  }

  renderTimeFormatConfigBlock(){
    return (
      <div>
        <SubHeader> Time format </SubHeader>
        <RadioButtonGroup name="selectedTimeFormat" className="radio-group" >
          <RadioButton label="24 hours" value="24" className="radio" />
          <RadioButton label="12 hours" value="12" className="radio" />
        </RadioButtonGroup>
      </div>
    )
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

  render() {
    return (
      <PanelWrapper>
        { this.renderThemeColorConfigBlock() }
        { this.renderTimeFormatConfigBlock() }
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
