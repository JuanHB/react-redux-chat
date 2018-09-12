import * as types from './Types';

export const storeSentMessage = (message) => {
  return {
    type: types.STORE_SENT_MESSAGE,
    message
  };
};

export const addReceivedMessage = (message) => {
  return {
    type: types.ADD_RECEIVED_MESSAGE,
    message
  }
};

export const updateConfigSelectedOption = (value, option, configType) => {
  return {
    type: types.UPDATE_CONFIG_SELECTED_OPTION,
    value,
    option,
    configType
  }
};

export const updateConfigStringOption = (value, option) => {
  return {
    type: types.UPDATE_CONFIG_STRING_OPTION,
    value,
    option
  }
};

export const resetConfigToDefaults = () => {
  return {
    type: types.RESET_CONFIG_TO_DEFAULTS
  }
};