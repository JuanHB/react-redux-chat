import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';
import TextField from 'material-ui/TextField';

class ComposeBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      messageValue: ""
    };

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
            autoComplete="off"
            autoFocus={true}
            underlineShow={false}
            hintText="Type your message"
            value={this.state.messageValue}
            onChange={(e) => this.handleMessageChange(e)}
            style={styles.textField}
            multiLine={true}
            rows={1}
            rowsMax={4}
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