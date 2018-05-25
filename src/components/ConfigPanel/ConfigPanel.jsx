import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions/Actions';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import RadioOptions from './RadioOptions/RadioOptions';
import ToggleOptions from './ToggleOptions/ToggleOptions';
import './ConfigPanel.scss';

class ConfigPanel extends Component {

  renderUserNameTextField(){
    const {user} = this.props.config;
    return (
      <div>
        <Subheader>User Name</Subheader>
        <TextField
          className='user-text-field'
          onChange={this.handleStringOptionChange}
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

  handleSelectOptionChange = (e, value, option, configType) => {
    this.props.updateConfigSelectedOption(value, option, configType);
  };

  handleStringOptionChange = event  => {
    this.props.updateConfigStringOption(event.target.value, 'user');
  };

  handleResetToDefaultsClick = () => {
    this.props.resetConfigToDefaults();
  };

  render() {
    return (
      <PanelWrapper>
        {this.renderUserNameTextField()}
        {this.renderRadioOptions()}
        <List>
          {this.renderToggleOptions()}
        </List>
        <RaisedButton
          className='reset-defaults-button'
          label='Reset to Defaults'
          secondary={true}
          onClick={this.handleResetToDefaultsClick}
        />
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
