
import {
    SET_LOCATIONS, SET_LOCATION_PAGE, SET_LOCATION_DETAILS_URL, CLEAR_LOCATION
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

  export const setLocationDetailsUrlAction = (url) => {
    return {
      type: SET_LOCATION_DETAILS_URL,
      payload: url
    }
  }


  export const clearLocationAction = () => {
    return {
      type: CLEAR_LOCATION
    }
  }