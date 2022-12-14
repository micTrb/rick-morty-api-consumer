import axios from "axios";
import { setLocationsAction, setLocationPageAction } from '../redux/actions/locationActions';
import { setPageAction } from "../redux/actions/pageActions";
import history from '../services/history';


//Paths
const locationURL = process.env.REACT_APP_LOCATION_URL;

export const setLocations = () => dispatch => {
  axios({
    method: 'get',
    url: locationURL
  })
    .then((response) => {
      console.log(response.data.results);
      dispatch(setLocationsAction(response.data.results));
      dispatch(setPageAction(response.data.info));

    })
    .catch(function (error) {
      console.log(error);
    });
};


export const getNextLocationList = (next) => dispatch => {
  axios({
    method: 'get',
    url: next,
  })
    .then((response) => {
      dispatch(setLocationsAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};



export const getPrevLocationList = (prev) => dispatch => {
  axios({
    method: 'get',
    url: prev,
  })
    .then((response) => {
      dispatch(setLocationsAction(response.data.results));
      dispatch(setPageAction(response.data.info));
    })
    .catch(function (error) {
      console.log(error);
    });
};



