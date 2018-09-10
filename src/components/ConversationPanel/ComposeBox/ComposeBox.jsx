import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Socket } from '../../../services/index';
import * as actions from '../../../actions/Actions';
import './ComposeBox.scss';

class ComposeBox extends Component {

  state = { message: '' };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  submitMessage = () => {
    const
      { user } = this.props.config,
      { message } = this.state;
    if(message){
      const messageToSend = {user , message};
      // access the socket singleton instance only when needed
      const socket = new Socket();
      socket.sendMessage(messageToSend, (messageSent) => {
        // stores the message on redux state
        this.props.sendMessage(messageSent);
        // cleans the user message on the local state after it was sent
        this.setState({ message: '' });
      })
    }
  };

  handleKeyPress = event => {
    const ctrlEnterToSend = this.props.config.toggle.ctrlEnterToSend.selected;
    if(ctrlEnterToSend){
      if(event.ctrlKey && event.charCode === 13){
        event.preventDefault();
        this.submitMessage();
      }
    } else {
      if(event.charCode === 13){
        event.preventDefault();
        this.submitMessage();
      }
    }
  };

  render() {
    const ctrlEnterToSend = this.props.config.toggle.ctrlEnterToSend.selected;
    return (
      <Paper className='paper'>
        <form onKeyPress={this.handleKeyPress} >
          <TextField
            rows={1}
            rowsMax={4}
            value={this.state.message}
            className='textField'
            hintText={ 'Type your message' + ((ctrlEnterToSend) ? ' (Ctrl + Enter to send)' : '')}
            onChange={this.handleMessageChange}
            multiLine={true}
            autoFocus={true}
            autoComplete='off'
            underlineShow={false}
          />
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    config: state.config
  };
};

export default connect(mapStateToProps, actions)(ComposeBox);