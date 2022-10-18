import {
    SET_LOCATIONS, SET_LOCATION_PAGE,
  } from "../actions/actionTypes";
  
  
  const initialState = {
    locationList: [],
    locationPage: {}
  };
  
  export default function locationReducer(state = initialState, action) {
    switch (action.type) {
  
      case SET_LOCATIONS:
        return Object.assign({}, state, { locationList: action.payload });
  
      case SET_LOCATION_PAGE:
        return Object.assign({}, state, { locationPage: action.payload });
  
      default:
        return state;
    }
  }