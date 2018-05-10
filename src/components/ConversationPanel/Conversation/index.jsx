import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Message from './Message';

class Conversation extends Component {

  renderConversationMessages(){
    return this.props.conversation.messages.map( msgObj => (
      <Message {...msgObj} />
    ));
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messagesContainer = ReactDOM.findDOMNode(this);
    console.log(messagesContainer)
    // messagesContainer.scrollTop = messagesContainer.scrollHeight;
    // ReactDOM.findDOMNode(this.el).scrollTop = ReactDOM.findDOMNode(this.el).scrollHeight;
  }

  render(){
    return (
      <ul style={styles.ul} >
        {this.renderConversationMessages()}
      </ul>
    );
  }
}

const styles = {
  ul: {
    marginTop: 64,
    marginBottom: 64
  }
};

const mapStateToProps = state => {
  return {
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, null)(Conversation);