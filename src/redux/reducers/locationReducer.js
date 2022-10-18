import {
  SET_LOCATIONS, SET_LOCATION_PAGE, SET_LOCATION_DETAILS_URL, CLEAR_LOCATION
} from "../actions/actionTypes";


const initialState = {
  locationList: [],
  locationPage: {},
  locationDetailsURL: ""
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {

    case SET_LOCATIONS:
      return Object.assign({}, state, { locationList: action.payload });

    case CLEAR_LOCATION:
      return Object.assign({}, state, { locationPage: {} });

    case SET_LOCATION_PAGE:
      return Object.assign({}, state, { locationPage: action.payload });

    case SET_LOCATION_DETAILS_URL:
      return Object.assign({}, state, { locationDetailsURL: action.payload });


    default:
      return state;
  }
}