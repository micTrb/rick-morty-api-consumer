import {
    SET_PAGE
} from "../actions/actionTypes";


const initialState = {
    pageInfos: {}
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {

        case SET_PAGE:
            return Object.assign({}, state, { pageInfos: action.payload });

        // case INCREMENT_PAGE:
        //     if(state.pageNumber === 42) {
        //         return Object.assign({}, state, { pageNumber: 42 });
        //     }
        //     else if (state.pageNumber === 0 ) {
        //         return Object.assign({}, state, { pageNumber: state.pageNumber + 1 });
        //     }

        //     else {
        //         console.log(state);
        //         return Object.assign({}, state, { pageNumber: state.pageNumber + 1 });
        //     }

        // case DECREMENT_PAGE:
        //     if (state.pageNumber === 0) {
        //         return Object.assign({}, state, { pageNumber: 1 });
        //     }

        //     else if (state.pageNumber === 0 ) {
        //         return Object.assign({}, state, { pageNumber: state.pageNumber + 1 });
        //     }

        //     else {
        //         return Object.assign({}, state, { pageNumber: state.pageNumber - 1 });
        //     }

        default:
            return state;
    }
}