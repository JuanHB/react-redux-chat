import * as types from 'actions/Types';

const conversationReducer = (
  state = {
    messages: [],
  },
  action = null
) => {

  const { type, message } = action;

  switch (type) {
    case types.STORE_SENT_MESSAGE:
    case types.ADD_RECEIVED_MESSAGE:
      const newMessage = messageWithAdditionalInfo(message, type);
      return { ...state, messages: [...state.messages, newMessage()] };

    default:
      return {...state}
  }

};

const messageWithAdditionalInfo = (message, type) => {
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
        // possible values: sent | received
        type: type === types.STORE_SENT_MESSAGE ? 'sent' : 'received',
      };
    return { ...message, ...addInfo };
  }
};

export default conversationReducer;