import {
    INCREMENT_PAGE,
    DECREMENT_PAGE
} from "../actions/actionTypes";


const initialState = {
    pageNumber: 0
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {

        case INCREMENT_PAGE:
            if(state.page == 50) {
                return Object.assign({}, state, { pageNumber: 50 });
            }
            else {
                return Object.assign({}, state, { pageNumber: state.page++ });
            }

        case DECREMENT_PAGE:
            if (state.page == 0) {
                return Object.assign({}, state, { pageNumber: 0 });
            }
            else {
                return Object.assign({}, state, { pageNumber: state.page-- });
            }

        default:
            return state;
    }
}