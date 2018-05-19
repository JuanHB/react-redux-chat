import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './Message.scss';

class Message extends PureComponent {

  getMessageTime() {

    const {dateTime, timeFormat, showDate} = this.props;
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const timeString = timeFormat === '12'
      ? dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      : [dateTime.getHours(), ':', dateTime.getMinutes()].join('');

    const dateString = showDate ? [
      ' - ', dateTime.getDate(), '/', (dateTime.getMonth() + 1), ' - ',
      weekDays[dateTime.getDay()]
    ].join('') : '';

    return [ timeString, dateString ].join('');
  };

  render() {
    const { message, user, type, muiTheme } = this.props;
    const { raisedButton, sentMessageWrapper, receivedMessageWrapper } = muiTheme;
    const fromMe = type === 'sent';
    const messageClass = ['message-wrapper ', (fromMe ? 'me' : 'them')].join('');

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