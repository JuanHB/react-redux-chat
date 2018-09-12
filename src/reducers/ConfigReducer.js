import * as types from 'actions/Types';

/**
 * This Reducer uses the Local Storage to save and load the configs
 * @param state
 * @param action
 * @returns {*}
 */

let initialState = () => {
  return {
    user: 'guest-001',
    radio: {
      theme: {
        label: 'Color Theme',
        options: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
        ],
        selected: 'light',
        defaultOption: 'light'
      },
      timeFormat: {
        label: 'Time Format',
        options: [
          { label: '24 hours', value: '24' },
          { label: '12 hours', value: '12' },
        ],
        selected: '24',
        defaultOption: '24'
      }
    },
    toggle: {
      date: {
        primaryText: 'Dates',
        secondaryText: 'Show message dates',
        selected: true,
        defaultOption: true
      },
      ctrlEnterToSend: {
        primaryText: 'Ctrl + Enter',
        secondaryText: 'To send messages',
        selected: false,
        defaultOption: false
      }
    },
  }
};

const configReducer = (
  state = initialState(),
  action = null
) => {

  const { value, option, configType } = action;
  let newState;
  switch (action.type) {

    case types.UPDATE_CONFIG_SELECTED_OPTION:
      newState = { ...state };
      newState[configType][option].selected = value;
      saveConfigOnLocalStorage(newState);
      return newState;

    case types.UPDATE_CONFIG_STRING_OPTION:
      newState = { ...state };
      newState[option] = value;
      saveConfigOnLocalStorage(newState);
      return newState;

    case types.RESET_CONFIG_TO_DEFAULTS:
      newState = {...initialState(), user: state.user};
      removeConfigFromLocalStorage();
      saveConfigOnLocalStorage(newState);
      return newState;

    default:
      const storedConfig = getConfigFromLocalStorage();
      return storedConfig ? { ...storedConfig } : { ...state };

  }
};

// for DRY, keeps the local storage item here...
const localStorageItemName = 'react-ws-chat-user_config';

// saves the config on JSON
const saveConfigOnLocalStorage = (state) => {
  localStorage.setItem(localStorageItemName, JSON.stringify(state));
};

// gets the config, if none was found, returns null
const getConfigFromLocalStorage = () => {
  const storedConfig = localStorage.getItem(localStorageItemName);
  return storedConfig ? JSON.parse(storedConfig) : null;
};

const removeConfigFromLocalStorage = () => {
  localStorage.removeItem(localStorageItemName);
};

export default configReducer;