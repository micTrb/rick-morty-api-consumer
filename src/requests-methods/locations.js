import axios from "axios";
import { setLocationsAction, setLocationPageAction } from '../redux/actions/locationActions';
import history from '../services/history';


//Paths
const locationURL = process.env.REACT_APP_LOCATION_URL;


export const getLocation = (locationDetailsUrl) => dispatch => {
  axios({
    method: 'get',
    url: locationDetailsUrl
  })
    .then((response) => {
      console.log(response.data);
      dispatch(setLocationPageAction(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};


export const getLocationDetailsGET = (name, url) => dispatch => {
  axios({
    method: 'get',
    url: url
  })
    .then((response) => {
      console.log(response.data);
      dispatch(setLocationPageAction(response.data));
      history.push('/locations/' + name);
      history.go();
    })
    .catch(function (error) {
      console.log(error);
    });
};