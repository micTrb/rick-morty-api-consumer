
import {
  SET_EPISODES
} from "./actionTypes";


export const setEpisodesAction = (ep) => {
  return {
    type:   SET_EPISODES,
    payload: ep
  }
}