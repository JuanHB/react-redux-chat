import React, { Component } from 'react';

import ComposeBox from './ComposeBox';
import Conversation from './Conversation';

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