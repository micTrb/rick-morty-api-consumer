import axios from "axios";
import { setLocationPageAction } from "../redux/actions/locationActions";
import history from '../services/history';

//Paths
// const locationsURL = process.env.REACT_APP_LOCATION_URL;

export const getLocations = (locationsURL) => dispatch => {
   console.log(locationsURL)

  axios({
    method: 'get',
    url: locationsURL,
  })
    .then((response) => {
        console.log(response.data)
        dispatch(setLocationPageAction(response.data));
        history.push('/locations/'+ response.data.id)
    })
    .catch(function (error) {
      console.log(error);
    });
};
