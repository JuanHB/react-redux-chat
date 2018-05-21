import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './Message.scss';

class Message extends PureComponent {

  getMessageTime() {

    const
      {dateTime, timeFormat, showDate} = this.props,
      weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // converts the time accordingly with the selected configuration
    const timeString = timeFormat === '12'
      ? dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      : [dateTime.getHours(), ':', dateTime.getMinutes()].join('');

    // shows the date string for the message, if enabled
    const dateString = showDate ? [
      ' - ', dateTime.getDate(), '/', (dateTime.getMonth() + 1), ' - ', weekDays[dateTime.getDay()]
    ].join('') : '';

    return [ timeString, dateString ].join('');
  };

  render() {
    const
      { message, user, type, muiTheme } = this.props,
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
          <div>{ message }</div>
          <div className='time'>{ this.getMessageTime() }</div>
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