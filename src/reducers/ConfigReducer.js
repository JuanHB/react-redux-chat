import * as types from '../actions/Types';

/**
 * This Reducer uses the Local Storage to save and load the configs
 * @param state
 * @param action
 * @returns {*}
 */

const configReducer = (
  state = {
    user: 'guest-001',
    theme: {
      label: 'Color Theme',
      options: [
        {label: 'Light', value: 'light'},
        {label: 'Dark', value: 'dark'},
      ],
      selected: 'light',
      defaultOption: 'light'
    },
    timeFormat: {
      label: 'Time Format',
      options: [
        {label: '24 hours', value: '24'},
        {label: '12 hours', value: '12'},
      ],
      selected: '24',
      defaultOption: '24'
    },
    date: {
      primaryText: 'Dates',
      secondaryText: 'Show messages dates',
      selected: true,
      defaultOption: true
    },
    messageSounds: {
      primaryText: 'Sounds',
      secondaryText: 'Message sounds',
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
  action = null
) => {

  const {value, option} = action;

  switch (action.type) {

    case types.UPDATE_CONFIG_SELECTED_OPTION:
      state[option].selected = value;
      return saveConfigOnLocalStorage(state);

    case types.UPDATE_CONFIG_STRING_OPTION:
      state[option] = value;
      return saveConfigOnLocalStorage(state);

    default:
      const storedConfig = getConfigFromLocalStorage();
      return storedConfig ? {...state, ...storedConfig} : {...state};

  }
};

const localStorageItemName = 'react-ws-chat-user_config';

// saves the config on JSON
const saveConfigOnLocalStorage = (state) => {
  localStorage.setItem(localStorageItemName, JSON.stringify(state));
  return {...state};
};

// gets the config, if none was found, returns null
const getConfigFromLocalStorage = () => {
  const storedConfig = localStorage.getItem(localStorageItemName);
  return storedConfig ? JSON.parse(storedConfig) : null;
};

export default configReducer;