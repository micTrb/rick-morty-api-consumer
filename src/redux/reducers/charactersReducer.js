import {
  SET_CHARACTERS, SET_CHARACTER_PAGE,
} from "../actions/actionTypes";


const initialState = {
  charactersList: [],
  characterPage: {}
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {

    case SET_CHARACTERS:
      return Object.assign({}, state, { charactersList: action.payload });

    case SET_CHARACTER_PAGE:
      return Object.assign({}, state, { characterPage: action.payload });

    default:
      return state;
  }
}