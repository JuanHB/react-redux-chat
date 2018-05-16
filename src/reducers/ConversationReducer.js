import * as types from '../actions/Types';

const conversationReducer = (
  state = {
    messages: [],
  },
  action = null
) => {

  const { type, message } = action;

  switch (type) {

    case types.SEND_NEW_MESSAGE:
    case types.ADD_RECEIVED_MESSAGE:
      const newMessage = messageWithAdditionalInfo(message);
      return { ...state, messages: [...state.messages, newMessage()] };

    default:
      return {...state}
  }

};

const messageWithAdditionalInfo = (message) => {
  return () => {
    const
      id = Math.floor((Math.random() * 99999) + 1),
      dateTime = new Date(),
      milliseconds = dateTime.getTime(),
      addInfo = {
        id,
        dateTime,
        milliseconds,
        key: milliseconds,
        type: 'text',
      };
    return { ...message, ...addInfo };
  }
};

export default conversationReducer;