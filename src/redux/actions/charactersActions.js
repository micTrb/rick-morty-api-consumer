
import {
  SET_CHARACTERS, SET_CHARACTER_PAGE, ADD_RESIDENT, CLEAR_RESIDENTS
} from "./actionTypes";


export const setCharactersAction = (chars) => {
  return {
    type: SET_CHARACTERS,
    payload: chars
  }
}


export const setCharacterPageAction = (charPage) => {
  return {
    type: SET_CHARACTER_PAGE,
    payload: charPage
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