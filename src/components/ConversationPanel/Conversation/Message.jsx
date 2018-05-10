import React from 'react';

const Message = (props) => {

  const { message, dateTime, user } = props;

  return (
    <li>
      <p>{user}</p>
      <p>{message}</p>
      <p>at: {dateTime.getHours()}:{dateTime.getMinutes()}</p>
    </li>
  );

};

export default Message;