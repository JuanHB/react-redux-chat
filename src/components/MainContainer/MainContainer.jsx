import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import {grey100, teal100, black} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "../Header/Header";
import { ChatService, Socket } from "../../services";
import ConfigPanel from "../ConfigPanel/ConfigPanel";
import * as actions from "../../actions/Actions";
import ConversationPanel from "../ConversationPanel/ConversationPanel";

class MainContainer extends Component {

  // starts the Socket connection singleton
  socket = new Socket();
  chatService = new ChatService();

  selectTheme() {
    const selectedTheme = this.props.config.radio.theme.selected;
    const baseTheme = selectedTheme === "light" ? lightBaseTheme : darkBaseTheme;
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
    debugger;
    // starts the socket messages listener with a callback
    // to store the received message
    // this.socket.listenMessages(this.props.addReceivedMessage);
    this.chatService.listenMessages(this.props.addReceivedMessage);
  }

  componentWillUnmount() {
    // this.socket.removeAllMessageListeners();
    this.chatService.removeAllMessageListeners();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.selectTheme())}>
        <div>
          <Header/>
          <Route exact path="/" component={ConversationPanel}/>
          <Route path="/config" component={ConfigPanel}/>
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
