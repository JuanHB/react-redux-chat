import React, { Component } from 'react';
import './App.css';

import ConversationPanel from './ConversationPanel/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConversationPanel />
      </div>
    );
  }
}

export default App;
