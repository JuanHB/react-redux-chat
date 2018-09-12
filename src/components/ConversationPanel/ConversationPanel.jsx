import React, { Component } from 'react';
import ComposeBox from './ComposeBox/ComposeBox';
import Conversation from './Conversation/Conversation';

class ConversationPanel extends Component {

  render() {
    return (
      <div>
        <Conversation />
        <ComposeBox />
      </div>
    );
  }
}

export default ConversationPanel;