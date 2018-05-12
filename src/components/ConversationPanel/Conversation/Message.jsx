import React from 'react';

const Message = (props) => {

  const {message, dateTime, user} = props;

  const getMessageTime = (dateTime) => {

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateTimeToReturn = [
      dateTime.getHours(), ":", dateTime.getMinutes(), " - ",
      dateTime.getDate(), "/", (dateTime.getMonth()+1), " - ", weekDays[dateTime.getDay()]
    ];

    return dateTimeToReturn.join("");
  };

  return (
    <div className="message-wrapper me">
      <div className="circle-wrapper"> </div>
      <div className="text-wrapper">
        <div>{message}</div>
        <div className="time">{getMessageTime(dateTime)}</div>
      </div>
    </div>
  );

};

export default Message;

