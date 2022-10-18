import { combineReducers } from "redux";
import charactersReducer from './charactersReducer';
import pageReducer from './pageReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationReducer,
  page: pageReducer
});

export default rootReducer;