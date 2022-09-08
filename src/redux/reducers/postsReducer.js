import {
  SET_POSTS, SET_POST_PAGE
} from "../actions/actionTypes";


const initialState = {
  postsList: [],
  postPage: {}
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {

    case SET_POSTS:
      return Object.assign({}, state, { postsList: action.payload });

    case SET_POST_PAGE:
      return Object.assign({}, state, { postPage: action.payload });

    default:
      return state;
  }
}