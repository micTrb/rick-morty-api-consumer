import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementPageAction, decrementPageAction } from '../../../redux/actions/pageActions';

import { getPrevCharactersList, getNextCharactersList } from "../../../requests-methods/characters";

const Paginator = () => {

    const dispatch = useDispatch();
    const pageInfos = useSelector(state => state.page.pageInfos);

    const incrementPage = () => {
        dispatch(getNextCharactersList(pageInfos.next));
    }

    const decrementPage = () => {
        dispatch(getPrevCharactersList(pageInfos.prev));
    }

    return (
        <div className="flex flex-col items-center py-12">
            {/* <span className="text-2xl sm:text-4xl text-gray-700 py-8">
                Showing <span className="font-semibold text-gray-900">1</span> to 
                <span className="font-semibold text-gray-900">10</span> of page 
                <span className="font-semibold text-gray-900"> {pageNumber}</span>
            </span> */}
            <div className="inline-flex mt-2 xs:mt-0">
                {pageInfos.prev ?
                    // <button className="py-2 px-12 text-2xl sm:text-4xl font-medium text-white bg-indigo-600 rounded-l"
                    //     onClick={decrementPage}
                    // >
                    <button onClick={decrementPage} 
                    className="inline-flex items-center py-2 px-4 mr-3 text-xl font-medium 
                        text-gray-400 bg-white rounded-lg border border-gray-300 
                        hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 
                        dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                        dark:hover:text-white">
                        Previous
                    </button> : null
                }

                {pageInfos.next ?
                    <button onClick={incrementPage} className="inline-flex items-center py-2 px-4 text-xl font-medium text-gray-400 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button> : null}

                    

            </div>
            {/* <button onClick={decrementPage} className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Previous
            </button>
            <button onClick={incrementPage} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next page
                <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button> */}
        </div>
    )
}

export default Paginator;

