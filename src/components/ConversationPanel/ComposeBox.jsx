import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Socket from "../../services/Socket";

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

    const { props } = this;
    const { user } = props.config;
    const { message } = this.state;

    if(message){
      const messageToSend = {user , message};
      // access the socket singleton instance only when needed
      const socket = new Socket();
      socket.sendMessageToSocket(messageToSend, props.sendMessage)
    }

    this.setState({
      message: ""
    });
  }

  handleKeyPress(event){
    if(event.charCode === 13){
      event.preventDefault();
      this.submitMessage();
    }
  }

  render() {
    return (
      <Paper style={styles.paper} >
        <form onKeyPress={(e) => this.handleKeyPress(e)} >
          <TextField
            rows={1}
            rowsMax={4}
            value={this.state.message}
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

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

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

export default connect(mapStateToProps, actions)(ComposeBox);