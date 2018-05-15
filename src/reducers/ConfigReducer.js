// import * as types from '../actions/actionTypes';

const configReducer = (
  state = {
    user: "guest-001",
    theme: {
      options: [ "light", "dark" ],
      selected: "light",
      defaultOption: "light"
    },
    clock: {
      options: [ "12", "24" ],
      selected: "24",
      defaultOption: "24"
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