import * as types from '../actions/Types';

const configReducer = (
  state = {
    user:  'guest-001',
    theme: {
      label: 'Color Theme',
      options: [
        { label: 'Light', value: 'light'},
        { label: 'Dark', value: 'dark'},
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
    },
    date: {
      selected: true,
      defaultOption: true
    },
    messageSounds: {
      selected: true,
      defaultOption: true
    },
    ctrlEnterToSend: {
      selected: false,
      defaultOption: false
    }
  },
  action = null
) => {

  /*const storedState = localStorage.getItem('react-ws-chat-user_config');
  const newState = saveStateOnLocalStorage(storedState);*/

  switch (action.type) {

    case types.UPDATE_CONFIG_OPTION:
      const { value, option } = action;
      state[option].selected = value;
      return { ...state };
      // return newState();

    default:
      return { ...state };
      // return newState();

  }

};

const saveStateOnLocalStorage = (state) => {
  return () => {
    localStorage.setItem('react-ws-chat-user_config', state);
    return { ...state }
  }
};

export default configReducer;