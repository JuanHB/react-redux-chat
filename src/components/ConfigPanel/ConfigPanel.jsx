import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions/Actions';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import RadioOptions from './RadioOptions/RadioOptions';
import './ConfigPanel.scss';

class ConfigPanel extends Component {

  constructor() {
    super();
    this.handleRadioOptionChange = this.handleRadioOptionChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  renderToggleOptionsBlock() {
    return (
      <List>
        <Divider/>
        <ListItem
          primaryText='Ctrl + Enter'
          secondaryText='To send messages'
          rightToggle={<Toggle/>}
        />
        <Divider/>
        <ListItem
          primaryText='Dates'
          secondaryText='Show messages dates'
          rightToggle={<Toggle/>}
        />
        <Divider/>
        <ListItem
          primaryText='Sounds'
          secondaryText='Message sounds'
          rightToggle={<Toggle/>}
        />
      </List>
    );
  }

  handleRadioOptionChange(event, value, option) {
    this.props.updateConfigSelectedOption(value, option);
  }

  handleUserNameChange(e) {
    this.props.updateConfigStringOption(e.target.value, 'user');
  }

  render() {
    const
      {config} = this.props,
      {theme, timeFormat, user} = config;

    return (
      <PanelWrapper>
        <div>
          <Subheader>User Name</Subheader>
          <TextField
            className='user-text-field'
            onChange={(e) => this.handleUserNameChange(e)}
            defaultValue={user}
            hintText='Anything you want...'
          />
        </div>
        {<RadioOptions {...theme} configProperty='theme' onChange={this.handleRadioOptionChange}/>}
        {<RadioOptions {...timeFormat} configProperty='timeFormat' onChange={this.handleRadioOptionChange}/>}
        {this.renderToggleOptionsBlock()}
      </PanelWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    config: state.config,
  }
};

export default withRouter(connect(mapStateToProps, actions)(ConfigPanel));
