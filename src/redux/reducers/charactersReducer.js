import {
  SET_CHARACTERS, SET_CHARACTER_DETAILS_URL, ADD_RESIDENT, CLEAR_RESIDENTS, SET_CHARACTER_DETAILS
} from "../actions/actionTypes";


const initialState = {
  charactersList: [],
  characterDetails: {},
  characterDetailsUrl: "",
  residents: [],
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {

    case SET_CHARACTERS:
      return Object.assign({}, state, { charactersList: action.payload });

    case SET_CHARACTER_DETAILS_URL:
        return Object.assign({}, state, { characterDetailsUrl: action.payload });

    case SET_CHARACTER_DETAILS:
      return Object.assign({}, state, { characterDetails: action.payload });

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