import React, { Component } from 'react';

import Header from './Header';
import ComposeBox from './ComposeBox';
import Conversation from './Conversation';

class ConversationPanel extends Component {

  render() {
    return (
      <div>
        <Header />
        <Conversation />
        <ComposeBox />
      </div>
    );
  }
}

export default ConversationPanel;