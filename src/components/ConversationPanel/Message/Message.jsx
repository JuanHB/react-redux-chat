import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMessageTime from '../../../utils/dateTime';
import './Message.scss';

class Message extends PureComponent {

  renderMessageContent(message){
    const regexUrl = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(regexUrl.test(message)){
      return (<a href={message} target='_blank'>{message}</a>)
    }
    return (message);
  }

  render() {
    const
      { message, user, type, muiTheme, dateTime, timeFormat, showDate } = this.props,
      { raisedButton, sentMessageWrapper, receivedMessageWrapper } = muiTheme,
      fromMe = type === 'sent',
      messageClass = ['message-wrapper ', (fromMe ? 'me' : 'them')].join('');

    // selecting the message wrapper and circle colors, those colors are based
    // on the selected theme from the muiTheme option loaded in App component
    const themeColors = {
      circle: {
        backgroundColor: fromMe ? raisedButton.secondaryColor : raisedButton.primaryColor
      },
      messageWrapper: fromMe ? sentMessageWrapper : receivedMessageWrapper
    };
    return (
      <div className={ messageClass }>
        <div className='circle-wrapper' style={themeColors.circle}> </div>
        <div className='text-wrapper' style={themeColors.messageWrapper}>
          <div className='userName'>{ user }</div>
          <div>{ this.renderMessageContent(message) }</div>
          <div className='time'>{ getMessageTime(dateTime, timeFormat, showDate) }</div>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dateTime: PropTypes.object.isRequired,
  showDate: PropTypes.bool.isRequired,
  timeFormat: PropTypes.string
};

export default muiThemeable()(Message);