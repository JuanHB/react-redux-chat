import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import Header from './Header';
import ConversationPanel from './ConversationPanel';
import Config from './Config';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={createStore(reducers)}>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
              <Header />
              <Route exact path='/' component={ConversationPanel} />
              <Route path='/config' component={Config} />
            </div>
          </MuiThemeProvider>
        </Provider>
      </Router>
    );
  }
}

export default App;
