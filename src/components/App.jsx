import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';

import MainContainer from './MainContainer/MainContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={createStore(reducers)}>
          <MainContainer/>
        </Provider>
      </Router>
    );
  }
}

export default App;
