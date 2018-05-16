import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

class Message extends PureComponent {

  getMessageTime(dateTime) {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateTimeToReturn = [
      dateTime.getHours(), ":", dateTime.getMinutes(), " - ",
      dateTime.getDate(), "/", (dateTime.getMonth() + 1), " - ",
      weekDays[dateTime.getDay()]
    ];
    return dateTimeToReturn.join("");
  };

  render() {

    const { message, dateTime, user, configUser } = this.props;
    const messageClass = ["message-wrapper ",((user === configUser) ? "me" : "them")].join("");

    return (
      <div className={ messageClass }>
        <div className="circle-wrapper">&nbsp;</div>
        <div className="text-wrapper">
          <div className="userName">{ user }</div>
          <div>{ message }</div>
          <div className="time">{ this.getMessageTime(dateTime) }</div>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dateTime: PropTypes.object.isRequired,
  configUser: PropTypes.string.isRequired
};

export default Message;