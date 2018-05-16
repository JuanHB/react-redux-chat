// import * as types from '../actions/actionTypes';

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
      label: "Time Format",
      options: [ "12", "24" ],
      selected: "24",
      defaultOption: "24"
    },
    date: {
      options: [ true, false ],
      selected: true,
      defaultOption: true
    },
    messageSounds: {
      options: [ true, false ],
      selected: true,
      defaultOption: true
    },
    ctrlEnterToSend: {
      options: [ true, false ],
      selected: false,
      defaultOption: false
    }
  },
  action = null
) => {

  switch (action.type) {

    default:
      return {...state}
  }

};

export default configReducer;