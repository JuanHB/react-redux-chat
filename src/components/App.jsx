import React, { Component } from 'react';

import ConversationPanel from './ConversationPanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <ConversationPanel />
      </MuiThemeProvider>
    );
  }
}

export default App;
