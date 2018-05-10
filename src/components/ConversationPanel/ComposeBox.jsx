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

  submitMessage(event) {
    event.preventDefault();

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

  generateMessageId() {
    return Math.floor((Math.random() * 99999) + 1);
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <form name="messageForm" onSubmit={(e) => this.submitMessage(e)}>
          <TextField
            autoComplete="off"
            autoFocus={true}
            underlineShow={false}
            hintText="Type your message"
            value={this.state.messageValue}
            onChange={(e) => this.handleMessageChange(e)}
            style={styles.textField}
          />
          <IconButton>
            <Send/>
          </IconButton>
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
    width: "80%",
    marginLeft: 14,
  }
};

export default connect(null, actions)(ComposeBox);