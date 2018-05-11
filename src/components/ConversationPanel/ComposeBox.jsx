import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class ComposeBox extends Component {

  constructor(props){
    super(props);
    this.state = { messageValue: "" };

    this.submitMessage = this.submitMessage.bind(this);
  }

  handleMessageChange = (e) => {
    this.setState({
      messageValue: e.target.value
    });
  };

  submitMessage() {
    const { messageValue } = this.state;

    if(messageValue){
      const dateTime = new Date();
      const milliseconds = dateTime.getTime();

      const newMessage = {
        id: this.generateMessageId(),
        type: "text",
        key: milliseconds,
        user: "user-001",
        message: messageValue,
        dateTime,
        milliseconds
      };

      this.props.sendMessage(newMessage);
    }

    this.setState({
      messageValue: ""
    });
  }

  handleKeyPress(event){
    if(event.charCode === 13){
      event.preventDefault();
      this.submitMessage();
    }
  }

  generateMessageId() {
    return Math.floor((Math.random() * 99999) + 1);
  }

  render() {
    return (
      <Paper style={styles.paper} >
        <form onKeyPress={(e) => this.handleKeyPress(e)} >
          <TextField
            rows={1}
            rowsMax={4}
            value={this.state.messageValue}
            style={styles.textField}
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

const styles = {
  paper: {
    position: "fixed",
    zIndex: 100,
    bottom: 0,
    left: 0,
    width: "100%",
  },
  textField: {
    marginLeft: 14,
    marginRight: 14,
    width: "93%"
  }
};

export default connect(null, actions)(ComposeBox);