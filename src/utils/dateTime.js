const getMessageTime = (dateTime, timeFormat, showDate) => {
  const
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

export default getMessageTime;