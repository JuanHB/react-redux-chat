// import * as types from '../actions/actionTypes';

const configReducer = (
  state = {
    user: "guest-001"
  },
  action = null
) => {

  switch (action.type) {

    default:
      return {...state}
  }

};

export default configReducer;