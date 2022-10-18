
import {
  SET_CHARACTERS, SET_CHARACTER_DETAILS, SET_CHARACTER_DETAILS_URL, ADD_RESIDENT, CLEAR_RESIDENTS
} from "./actionTypes";


export const setCharactersAction = (chars) => {
  return {
    type: SET_CHARACTERS,
    payload: chars
  }
}

export const setCharacterDetailsAction = (charDetails) => {
  return {
    type: SET_CHARACTER_DETAILS,
    payload: charDetails
  }
}

export const setCharacterDetailsUrlAction = (url) => {
  return {
    type: SET_CHARACTER_DETAILS_URL,
    payload: url
  }
}





export const addResidentAction = (resident) => {
  return {
    type: ADD_RESIDENT,
    payload: resident
  }
}


export const clearResidentsAction = () => {
  return {
    type: CLEAR_RESIDENTS
  }
}