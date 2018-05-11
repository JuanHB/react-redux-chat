import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './Message';

class Conversation extends Component {

  constructor() {
    super();

    this.state = { height: 0 };

    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateStyleHeight = this.updateStyleHeight.bind(this)

  }

  updateStyleHeight(){
    this.setState({ height: window.innerHeight - (styles.marginTop + styles.marginBottom )});
  }

  componentDidMount() {
    this.updateStyleHeight();
    this.scrollToBottom();
    window.addEventListener('resize', this.updateStyleHeight);
  }

  componentWillUnmount() {
    console.log(1)
    window.removeEventListener('resize', this.updateStyleHeight);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollTop = this.el.scrollHeight;
  }

  renderConversationMessages(){
    return this.props.conversation.messages.map( msgObj => (
      <Message {...msgObj} />
    ));
  }

  render(){

    const style = {...styles, height: this.state.height};

    return (
      <ul style={style} ref={el => this.el = el } >
        {this.renderConversationMessages()}
      </ul>
    );
  }
}

const styles = {
  marginTop: 64,
  marginBottom: 64,
  overflow: "auto",
  height: 100
};

const mapStateToProps = state => {
  return {
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, null)(Conversation);