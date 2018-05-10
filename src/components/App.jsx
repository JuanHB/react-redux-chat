import React, { Component } from 'react';

import ConversationPanel from './ConversationPanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <MuiThemeProvider>
          <ConversationPanel />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
