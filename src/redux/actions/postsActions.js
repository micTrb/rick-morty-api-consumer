
import {
  SET_POSTS, SET_POST_PAGE
} from "./actionTypes";


export const setPostsAction = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}


export const setPostPageAction = (postPage) => {
  return {
    type: SET_POST_PAGE,
    payload: postPage
  }
}