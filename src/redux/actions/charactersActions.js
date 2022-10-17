
import {
  SET_CHARACTERS, SET_CHARACTER_PAGE
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