import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import SubHeader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions/Actions';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import RadioOptions from './RadioOptions/RadioOptions';
import './ConfigPanel.scss';

class ConfigPanel extends Component {

  constructor(){

    super();

    this.handleRadioOptionChange = this.handleRadioOptionChange.bind(this);

  }

  renderThemeColorConfigBlock() {

    const
      { config } = this.props,
      { selected } = config.theme;

    return (
      <div>
        <SubHeader>Theme Color</SubHeader>
        <RadioButtonGroup name="selectedTheme" defaultSelected={ selected }  className="radio-group">
          <RadioButton label="Light" value="light" className="radio" />
          <RadioButton label="Dark" value="dark" className="radio" />
        </RadioButtonGroup>
      </div>
    );
  }

  renderTimeFormatConfigBlock(){

    const
      {config } = this.props,
      { selected } = config.timeFormat

    return (
      <div>
        <SubHeader> Time format </SubHeader>
        <RadioButtonGroup name="selectedTimeFormat" defaultSelected={ selected } className="radio-group" >
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

  handleRadioOptionChange(e) {
    console.log(e)
  }

  render() {

    const { config } = this.props;

    return (
      <PanelWrapper>
        { <RadioOptions {...config.theme } onChange={this.handleRadioOptionChange} /> }
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
