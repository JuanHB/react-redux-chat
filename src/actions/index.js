import * as types from './actionTypes';

export const sendMessage = (message) => {
  return {
    type: types.SEND_NEW_MESSAGE,
    payload: message
  };
};