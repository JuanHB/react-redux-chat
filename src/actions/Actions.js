import * as types from './Types';

export const sendMessage = (message) => {
  return {
    type: types.SEND_NEW_MESSAGE,
    message
  };
};

export const addReceivedMessage = (message) => {
  return {
    type: types.ADD_RECEIVED_MESSAGE,
    message
  }
};

export const updateConfigOption = (value, option) => {
  return {
    type: types.UPDATE_CONFIG_OPTION,
    value, option
  }
};

export const resetAllConfigOptions = () => {
  return {
    type: types.RESET_ALL_CONFIG_OPTIONS
  }
};