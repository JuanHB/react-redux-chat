import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

class Message extends PureComponent {

  getMessageTime(dateTime, timeFormat = "24") {

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const timeString = timeFormat === "12"
      ? dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      : [dateTime.getHours(), ":", dateTime.getMinutes()].join("");

    const dateTimeToReturn = [
      timeString, " - ",
      dateTime.getDate(), "/", (dateTime.getMonth() + 1), " - ",
      weekDays[dateTime.getDay()]
    ];
    return dateTimeToReturn.join("");
  };

  render() {

    const { message, dateTime, user, configUser, timeFormat } = this.props;
    const messageClass = ["message-wrapper ",((user === configUser) ? "me" : "them")].join("");

    return (
      <div className={ messageClass }>
        <div className="circle-wrapper">&nbsp;</div>
        <div className="text-wrapper">
          <div className="userName">{ user }</div>
          <div>{ message }</div>
          <div className="time">{ this.getMessageTime(dateTime, timeFormat) }</div>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dateTime: PropTypes.object.isRequired,
  configUser: PropTypes.string.isRequired,
  timeFormat: PropTypes.string
};

export default Message;