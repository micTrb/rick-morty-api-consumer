import { combineReducers } from "redux";
import charactersReducer from './charactersReducer';
import pageReducer from './pageReducer';
import locationReducer from './locationReducer';
import episodesReducer from './episodesReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationReducer,
  episodes: episodesReducer,
  page: pageReducer
});

export default rootReducer;