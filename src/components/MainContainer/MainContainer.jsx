import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import {grey100, teal100, black} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "components/Header/Header";
import ChatService from "services/ChatService";
import ConfigPanel from "components/ConfigPanel/ConfigPanel";
import * as actions from "actions/Actions";
import ConversationPanel from "components/ConversationPanel/ConversationPanel";

class MainContainer extends Component {

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
    ChatService.listenMessages(this.props.addReceivedMessage);
  }

  componentWillUnmount() {
    ChatService.removeAllMessageListeners();
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
