import { combineReducers } from "redux";
import charactersReducer from './charactersReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  page: pageReducer
});

export default rootReducer;