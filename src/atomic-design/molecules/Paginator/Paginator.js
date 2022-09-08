import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementPageAction, decrementPageAction } from '../../../redux/actions/pageActions';

import { getList } from "../../../requests-methods/rooms";

const Paginator = () => {

    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.page.pageNumber);

    const incrementPage = () => {
        dispatch(incrementPageAction())
        dispatch(getList(pageNumber));

    }
    const decrementPage = () => {
        dispatch(decrementPageAction())
        dispatch(getList(pageNumber));
    }

    return (
        <div className="flex flex-col items-center py-12">
            <span className="text-2xl sm:text-4xl text-gray-700 py-8">
                Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">10</span> of page <span className="font-semibold text-gray-900">{pageNumber}</span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="py-2 px-12 text-2xl sm:text-4xl font-medium text-white bg-indigo-600 rounded-l"
                    onClick={decrementPage}
                >
                    Prev
                </button>
                <button className="py-2 px-12 text-2xl sm:text-4xl font-medium text-white bg-indigo-600 rounded-r border-0 border-l border-gray-700"
                onClick={incrementPage}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Paginator;

