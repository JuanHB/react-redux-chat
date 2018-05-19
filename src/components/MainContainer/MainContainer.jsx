import React, {Component} from 'react';
import Header from '../Header/Header';
import ConversationPanel from '../ConversationPanel/ConversationPanel';
import ConfigPanel from '../ConfigPanel/ConfigPanel';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {grey100, teal100, black} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as actions from '../../actions/Actions';
import { Socket } from "../../services";

class MainContainer extends Component {

  // starts the Socket connection singleton
  socket = new Socket();

  selectTheme() {
    const {radio} = this.props.config;
    const baseTheme = radio.theme.selected === 'light' ? lightBaseTheme : darkBaseTheme;
    return getMuiTheme({
      receivedMessageWrapper: {
        color: black,
        backgroundColor: teal100
      },
      sentMessageWrapper: {
        color: black,
        backgroundColor: grey100
      }
    }, baseTheme);
  }

  componentDidMount() {
    // starts the socket messages listener with a callback
    // to store the received message
    this.socket.listenMessagesFromSocket(this.props.addReceivedMessage);
  }

  componentWillUnmount() {
    this.socket.removeAllMessageListeners();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.selectTheme())}>
        <div>
          <Header/>
          <Route exact path='/' component={ConversationPanel}/>
          <Route path='/config' component={ConfigPanel}/>
        </div>
      </MuiThemeProvider>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    config: state.config
  }
};

export default withRouter(connect(mapStateToProps, actions)(MainContainer));
