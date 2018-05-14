import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './Message';

import openSocket from "socket.io-client";

class Conversation extends Component {

  constructor() {
    super();

    this.state = { height: 0 };
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateStyleHeight = this.updateStyleHeight.bind(this)

  }

  updateStyleHeight(){
    this.setState({ height: window.innerHeight - 100});
  }

  componentDidMount() {
    this.updateStyleHeight();
    this.scrollToBottom();

    /*subscribeToMessages((err, message) => {
      console.log(err, message)
    });*/

    // const socket = openSocket("http://185.13.90.140:8081/");

    window.addEventListener('resize', this.updateStyleHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyleHeight);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.convoContainer.scrollTop = this.convoContainer.scrollHeight;
  }

  renderConversationMessages(){
    return this.props.conversation.messages.map( msgObj => (
      <Message {...msgObj} />
    ));
  }

  render(){
    return (
      <div style={{ height: this.state.height }} ref={ elem => this.convoContainer = elem } className="wrapper inner" >
        {this.renderConversationMessages()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, null)(Conversation);