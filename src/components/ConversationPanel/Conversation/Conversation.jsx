import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from '../Message/Message';
import * as actions from '../../../actions/Actions';
import { Socket } from '../../../services';
import PanelWrapper from '../../PanelWrapper/PanelWrapper';

class Conversation extends Component {

  // starts the Socket connection singleton
  socket = new Socket();

  componentDidMount() {
    // starts the socket messages listener with a callback
    // to store the received message
    this.socket.listenMessagesFromSocket(this.props.addReceivedMessage);
  }

  componentWillUnmount() {
    this.socket.removeAllMessageListeners();
  }

  renderConversationMessages(){
    const { conversation, config } = this.props;
    return conversation.messages.map( msgObj => (
      <Message {...msgObj} configUser={config.user} timeFormat={config.timeFormat.selected} />
    ));
  }

  render(){
    return (
      <PanelWrapper
        scrollToBottom={true}
        subtractFromHeight={100}
      >
        { this.renderConversationMessages() }
      </PanelWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    config: state.config,
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, actions)(Conversation);