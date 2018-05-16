import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from '../Message/Message';
import * as actions from '../../../actions/Actions';
import { Socket } from '../../../services';
import PanelWrapper from '../../PanelWrapper/PanelWrapper';

class Conversation extends Component {

  socket = new Socket();

  constructor() {
    super();
    this.panelWrapper = React.createRef();
  }

  componentDidMount() {

    const { socket, props } = this;
    this.panelWrapper.current.scrollToBottom();

    // starts the Socket connection singleton
    // and calls the messages listener with a callback
    socket.listenMessagesFromSocket(props.addReceivedMessage);
  }

  componentWillUnmount() {
    this.socket.removeAllMessageListeners();
  }

  componentDidUpdate() {
    this.panelWrapper.current.scrollToBottom();
  }

  renderConversationMessages(){
    const { props } = this;
    return props.conversation.messages.map( msgObj => (
      <Message {...msgObj} configUser={props.config.user} />
    ));
  }

  render(){
    return (
      <PanelWrapper
        subtractFromHeight={100}
        ref={this.panelWrapper}>
        { this.renderConversationMessages() }
      </PanelWrapper>
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