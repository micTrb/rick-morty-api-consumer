
import {
    SET_LOCATIONS, SET_LOCATION_PAGE
  } from "./actionTypes";
  
  
  export const setLocationsAction = (loc) => {
    return {
      type: SET_LOCATIONS,
      payload: loc
    }
  }
  
  
  export const setLocationPageAction = (loc) => {
    return {
      type: SET_LOCATION_PAGE,
      payload: loc
    }
  }