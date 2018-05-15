import * as types from './actionTypes';

export const sendMessage = (message) => {
  return {
    type: types.SEND_NEW_MESSAGE,
    payload: message
  };
};

export const addReceivedMessage = (message) => {
  return {
    type: types.ADD_RECEIVED_MESSAGE,
    payload: message
  }
};