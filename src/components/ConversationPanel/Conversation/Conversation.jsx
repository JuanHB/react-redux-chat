import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from '../Message/Message';
import * as actions from '../../../actions/Actions';
import PanelWrapper from '../../PanelWrapper/PanelWrapper';

class Conversation extends Component {

  renderConversationMessages = () => {
    const { conversation, config } = this.props;
    return conversation.messages.map( msgObj => (
      <Message
        {...msgObj}
        configUser={config.user}
        showDate={config.toggle.date.selected}
        timeFormat={config.radio.timeFormat.selected}
      />
    ));
  };

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