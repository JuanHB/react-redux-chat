import React, {Component} from 'react';
import {connect} from 'react-redux';

class Conversation extends Component {

  renderConversationMessages(){
    return this.props.conversation.messages.map( msg => (
      <div> {msg} </div>
    ));
  }

  render(){

    return (
      <div>
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