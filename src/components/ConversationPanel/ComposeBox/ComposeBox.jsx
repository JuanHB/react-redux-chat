import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Socket } from "../../../services/index";
import * as actions from '../../../actions/Actions';
import './ComposeBox.scss';

class ComposeBox extends Component {

  constructor(props){
    super(props);
    this.state = { message: "" };
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  };

  submitMessage() {

    const
      { props } = this,
      { user } = props.config,
      { message } = this.state;

    if(message){
      const messageToSend = {user , message};
      // access the socket singleton instance only when needed
      const socket = new Socket();
      socket.sendMessageToSocket(messageToSend, (messageSent) => {
        // stores the message on redux state
        props.sendMessage(messageSent);
        // cleans the user message on the local state after it was sent
        this.setState({ message: "" });
      })
    }
  }

  handleKeyPress(event){
    if(event.charCode === 13){
      event.preventDefault();
      this.submitMessage();
    }
  }

  render() {
    return (
      <Paper className="paper" >
        <form onKeyPress={(e) => this.handleKeyPress(e)} >
          <TextField
            rows={1}
            rowsMax={4}
            value={this.state.message}
            className="textField"
            hintText="Type your message"
            onChange={(e) => this.handleMessageChange(e)}
            multiLine={true}
            autoFocus={true}
            autoComplete="off"
            underlineShow={false}
          />
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

export default connect(mapStateToProps, actions)(ComposeBox);