import * as types from '../actions/actionTypes';

const conversationReducer = (
  state = {
    messages: [],
  },
  action = null
) => {
  switch (action.type) {

    case types.SEND_NEW_MESSAGE:
    case types.ADD_RECEIVED_MESSAGE:
      const newMessage = messageWithAdditionalInfo(action.payload);
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
        type: 'text',
        key: milliseconds,
        id, milliseconds, dateTime
      };

    return { ...message, ...addInfo };
  }
};

export default conversationReducer;