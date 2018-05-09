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
      message: ""
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  };

  submitMessage(event) {
    event.preventDefault();

    const { message } = this.state;

    this.props.sendMessage(message);

    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <form name="messageForm" onSubmit={(e) => this.submitMessage(e)}>
          <TextField
            autoFocus={true}
            underlineShow={false}
            hintText="Type your message"
            value={this.state.message}
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