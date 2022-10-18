import axios from "axios";
import { setLocationsAction, setLocationPageAction } from '../redux/actions/locationActions';


//Paths
const locationURL = process.env.REACT_APP_LOCATION_URL;


export const getLocation = (locationDetailsUrl) => dispatch => {
  axios({
    method: 'get',
    url: locationDetailsUrl
  })
    .then((response) => {
      dispatch(setLocationPageAction(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
