import { SET_PAGE } from "./actionTypes"


export const setPageAction = (pageInfos) => {
  return {
    type: SET_PAGE,
    payload: pageInfos
  }

}

// export const decrementPageAction = () => {
//   return {
//     type: DECREMENT_PAGE,
//   }
// }
