import {
  SET_CHARACTERS, SET_CHARACTER_PAGE, ADD_RESIDENT, CLEAR_RESIDENTS
} from "../actions/actionTypes";


const initialState = {
  charactersList: [],
  characterPage: {},
  residents: [],
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {

    case SET_CHARACTERS:
      return Object.assign({}, state, { charactersList: action.payload });

    case SET_CHARACTER_PAGE:
      return Object.assign({}, state, { characterPage: action.payload });

    case ADD_RESIDENT:
      return Object.assign({}, state, {
        residents: [...state.residents, action.payload]
      });

    case CLEAR_RESIDENTS:
      return Object.assign({}, state, {
        residents: []
      });

    default:
      return state;
  }
}