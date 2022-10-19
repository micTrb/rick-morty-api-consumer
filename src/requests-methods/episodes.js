import axios from "axios";
import { setEpisodesAction } from '../redux/actions/episodesActions';
import { setPageAction } from "../redux/actions/pageActions";


//Paths
const episodesURL = process.env.REACT_APP_EPISODE_URL;

export const setEpisodes = () => dispatch => {
  axios({
    method: 'get',
    url: episodesURL
  })
    .then((response) => {
      dispatch(setEpisodesAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};


export const getNextEpisodeList = (next) => dispatch => {
  axios({
    method: 'get',
    url: next,
  })
    .then((response) => {
      dispatch(setEpisodesAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};



export const getPrevEpisodeList = (prev) => dispatch => {
  axios({
    method: 'get',
    url: prev,
  })
    .then((response) => {
      dispatch(setEpisodesAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};



