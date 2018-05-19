import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions/Actions';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import RadioOptions from './RadioOptions/RadioOptions';
import ToggleOptions from './ToggleOptions/ToggleOptions';
import './ConfigPanel.scss';

class ConfigPanel extends Component {

  constructor() {
    super();
    this.handleStringOptionChange = this.handleStringOptionChange.bind(this);
    this.handleSelectOptionChange = this.handleSelectOptionChange.bind(this);
  }

  renderUserNameTextField(){
    const {user} = this.props.config;
    return (
      <div>
        <Subheader>User Name</Subheader>
        <TextField
          className='user-text-field'
          onChange={(e) => this.handleStringOptionChange(e)}
          defaultValue={user}
          hintText='Anything you want...'
        />
      </div>
    );
  }

  renderRadioOptions(){
    const {radio} = this.props.config;
    return Object.keys(radio).map((key, index) => {
      return (
        <RadioOptions
          {...radio[key]}
          key={index}
          configProperty={key}
          onChange={this.handleSelectOptionChange}
        />
      )
    });
  }

  renderToggleOptions(){
    const {toggle} = this.props.config;
    return Object.keys(toggle).map((key,index) => {
      return (
        <ToggleOptions
          {...toggle[key]}
          key={index}
          toggled={toggle[key].selected}
          configProperty={key}
          onToggle={this.handleSelectOptionChange}
        />
      )
    });
  }

  handleSelectOptionChange(e, value, option, configType){
    this.props.updateConfigSelectedOption(value, option, configType);
  }

  handleStringOptionChange(e) {
    this.props.updateConfigStringOption(e.target.value, 'user');
  }

  render() {
    return (
      <PanelWrapper>
        {this.renderUserNameTextField()}
        {this.renderRadioOptions()}
        <List>
          {this.renderToggleOptions()}
        </List>
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
