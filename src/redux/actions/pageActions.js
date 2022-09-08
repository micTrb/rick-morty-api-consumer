import { INCREMENT_PAGE, DECREMENT_PAGE } from "./actionTypes"


export const incrementPageAction = () => {
  return {
    type: INCREMENT_PAGE,
  }
}


export const decrementPageAction = () => {
  return {
    type: DECREMENT_PAGE,
  }
}
