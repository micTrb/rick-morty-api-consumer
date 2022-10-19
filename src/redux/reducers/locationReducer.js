import {
  SET_LOCATIONS
} from "../actions/actionTypes";


const initialState = {
  locationList: [],
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {

    case SET_LOCATIONS:
      return Object.assign({}, state, { locationList: action.payload });

    default:
      return state;
  }
}