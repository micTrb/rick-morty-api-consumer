import axios from "axios";
import { setCharacterPageAction, setCharactersAction, setPostPageAction, setPostsAction } from '../redux/actions/charactersActions';
import { setPageAction } from '../redux/actions/pageActions';

//Paths
const searchURL = process.env.REACT_APP_SEARCH_URL;
const listingURL = process.env.REACT_APP_LISTING_URL;

export const getCharactersList = () => dispatch => {
  axios({
    method: 'get',
    url: searchURL,
  })
    .then((response) => {
      dispatch(setCharactersAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};


export const getNextCharactersList = (next) => dispatch => {
  axios({
    method: 'get',
    url: next,
  })
    .then((response) => {
      dispatch(setCharactersAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};



export const getPrevCharactersList = (prev) => dispatch => {
  axios({
    method: 'get',
    url: prev,
  })
    .then((response) => {
      dispatch(setCharactersAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};




export const getCharacter = (id) => dispatch => {

  axios.get(listingURL + id, {

  })
    .then(function (response) {
      console.log(response.data);
      dispatch(setCharacterPageAction(response.data));

    })
    .catch(function (error) {
      console.log(error);
    });
};