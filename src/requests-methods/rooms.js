import axios from "axios";
import { setPostPageAction, setPostsAction } from '../redux/actions/postsActions';

//Paths
const searchURL = process.env.REACT_APP_SEARCH_URL;
const listingURL = process.env.REACT_APP_LISTING_URL;

export const getList = (pageNumber) => dispatch => {
  axios({
    method: 'post',
    url: searchURL,
    data: {
      "listingTypes": [],
      "fromPrice": 0,
      "toPrice": 30000,
      "services": [],
      "pageSize": 10,
      "pageNumber": pageNumber,
      "sortField": "RELEVANCE",
      "sortOrder": "ASC",
      "lang": "it"
    }
  })
    .then((response) => {
      console.log(response.data.data);
      dispatch(setPostsAction(response.data.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};


export const getPost = (id) => dispatch => {

  axios.get(listingURL, {
    params: {
      lang: "it",
      listingId: id
    }
  })
    .then(function (response) {
      console.log(response.data.data);
      dispatch(setPostPageAction(response.data.data));

    })
    .catch(function (error) {
      console.log(error);
    });
};