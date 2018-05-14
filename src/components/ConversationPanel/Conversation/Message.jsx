import React, { PureComponent } from 'react';

class Message extends PureComponent {

  constructor(props) {
    super(props);
  }

  getMessageTime(dateTime) {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateTimeToReturn = [
      dateTime.getHours(), ":", dateTime.getMinutes(), " - ",
      dateTime.getDate(), "/", (dateTime.getMonth() + 1), " - ", weekDays[dateTime.getDay()]
    ];
    return dateTimeToReturn.join("");
  };

  render() {

    const { message, dateTime } = this.props;

    return (
      <div className="message-wrapper me">
        <div className="circle-wrapper">&nbsp;</div>
        <div className="text-wrapper">
          <div>{ message }</div>
          <div className="time">{ this.getMessageTime(dateTime) }</div>
        </div>
      </div>
    );
  }

}

export default Message;

