import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './Message';
import * as actions from '../../../actions';

import { Socket } from '../../../services';

class Conversation extends Component {

  socket = new Socket();

  constructor() {
    super();
    this.state = { height: 0 };
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateStyleHeight = this.updateStyleHeight.bind(this)

  }

  componentDidMount() {

    const { socket, props } = this;

    this.updateStyleHeight();
    this.scrollToBottom();

    // starts the Socket connection singleton
    // and calls the messages listener with a callback
    socket.listenMessagesFromSocket(props.addReceivedMessage);
    window.addEventListener('resize', this.updateStyleHeight);
  }

  componentWillUnmount() {
    this.socket.removeAllMessageListeners();
    window.removeEventListener('resize', this.updateStyleHeight);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  updateStyleHeight(){
    this.setState({ height: window.innerHeight - 100});
  }

  scrollToBottom() {
    this.convoContainer.scrollTop = this.convoContainer.scrollHeight;
  }

  renderConversationMessages(){
    const { props } = this;
    return props.conversation.messages.map( msgObj => (
      <Message {...msgObj} configUser={props.config.user} />
    ));
  }

  render(){
    return (
      <div
        className="wrapper inner"
        style={{ height: this.state.height }}
        ref={elem => this.convoContainer = elem}>
        {this.renderConversationMessages()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    config: state.config,
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, actions)(Conversation);