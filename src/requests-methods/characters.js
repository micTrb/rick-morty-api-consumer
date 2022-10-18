import axios from "axios";
import { setCharacterPageAction, setCharactersAction, addResidentAction, setCharacterDetailsAction } from '../redux/actions/charactersActions';
import { setPageAction } from '../redux/actions/pageActions';
import history from '../services/history';

//Paths
const charactersURL = process.env.REACT_APP_CHARACTERS_URL;

export const getCharactersList = () => dispatch => {
  axios({
    method: 'get',
    url: charactersURL,
  })
    .then((response) => {
      console.log(response);
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
  axios({
    method: 'get',
    url: charactersURL + "/" + id,
  })
    .then((response) => {
      console.log(response);
      dispatch(setCharacterDetailsAction(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getCharacterDetailsGET = (id, url) => dispatch => {
  console.log(url);
  axios({
    method: 'get',
    url: url
  })
    .then((response) => {

      console.log(response.data);
      dispatch(setCharacterDetailsAction(response.data));
      history.push("/characters/" + id);
      history.go();
    })
    .catch(function (error) {
      console.log(error);
    });
};




export const addCharacterFromUrl = (url) => dispatch => {
  axios({
    method: 'get',
    url: url
  })
    .then(response => {
      console.log(response.data);
      dispatch(addResidentAction(response.data));
    })
    .catch(err => { return err })
};