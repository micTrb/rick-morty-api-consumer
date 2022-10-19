import {
  SET_EPISODES
} from "../actions/actionTypes";


const initialState = {
  episodesList: [],
};

export default function episodesReducer(state = initialState, action) {
  switch (action.type) {

    case SET_EPISODES:
      return Object.assign({}, state, { episodesList: action.payload });

    default:
      return state;
  }
}