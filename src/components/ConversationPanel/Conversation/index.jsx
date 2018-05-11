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
    this.setState({ height: window.innerHeight - 100});
  }

  componentDidMount() {
    this.updateStyleHeight();
    this.scrollToBottom();
    window.addEventListener('resize', this.updateStyleHeight);
  }

  componentWillUnmount() {
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
    return (
      <div style={{ height: this.state.height }} ref={el => this.el = el } className="wrapper inner" >
        {this.renderConversationMessages()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    conversation: state.conversation
  }
};

export default connect(mapStateToProps, null)(Conversation);