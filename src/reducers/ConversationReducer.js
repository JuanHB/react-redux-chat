import * as types from '../actions/actionTypes';

const conversationReducer = (
  state = {
    messages: [],
  },
  action = null
) => {

  /*const newMessage = {
    id: generateMessageId(),
    type: "text",
    key: milliseconds,
    user: userName,
    message: messageValue,
    dateTime,
    milliseconds
  };*/

  switch (action.type) {

    case types.SEND_NEW_MESSAGE:
      const newMessage = messageWithAdditionalInfo(action.payload);
      return { ...state, messages: [...state.messages, newMessage()] };

    case types.ADD_LOADED_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload ]};

    default:
      return {...state}
  }

};

const messageWithAdditionalInfo = (message) => {
  return () => {

    const dateTime = new Date();
    const milliseconds = dateTime.getTime();
    const id = generateMessageId();

    return { ...message, type: "text", dateTime, milliseconds, id, key: milliseconds };
  }
};

const generateMessageId = () => {
  return Math.floor((Math.random() * 99999) + 1);
};

export default conversationReducer;