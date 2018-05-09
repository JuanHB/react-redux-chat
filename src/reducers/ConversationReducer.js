import * as types from '../actions/actionTypes';

const conversationReducer = (
  state = {
    messages: [],
  },
  action = null
) => {

  switch (action.type) {

    case types.SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    default:
      return {...state}
  }

};

export default conversationReducer;