import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './Message';
import * as actions from '../../../actions';

import Socket from '../../../services/Socket';

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

    const socket = new Socket();
    socket.listenMessagesFromSocket((m) => this.props.sendMessage(m));

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
      <Message {...msgObj} configUser={this.props.config.user} />
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
    config: state.config,
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, actions)(Conversation);