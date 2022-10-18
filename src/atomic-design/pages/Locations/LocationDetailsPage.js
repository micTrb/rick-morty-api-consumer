import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../requests-methods/characters";
import DetailsCard from '../../molecules/DetailsCard/DetailsCard';
import { useLocation } from 'react-router-dom';
import LocationDetails from '../../molecules/LocationDetails/LocationDetails';
import { getLocation } from '../../../requests-methods/locations';
import { clearResidentsAction } from '../../../redux/actions/charactersActions';
import { clearLocationAction } from "../../../redux/actions/locationActions";

const LocationDetailsPage = () => {
  const dispatch = useDispatch();

  const locationDetailsURL = useSelector(state => state.locations.locationDetailsURL);
  const locationDetailsPage = useSelector(state => state.locations.locationPage);


  useEffect(() => {
    dispatch(clearLocationAction());
    dispatch(clearResidentsAction());
    dispatch(getLocation(locationDetailsURL));
  }, [dispatch])



  return (
    <div className="py-24 px-12">
      <div className="lg:w-full mx-auto">

        <LocationDetails
          locationDetails={locationDetailsPage}
        /> 
      </div>
    </div>
  );

}
export default LocationDetailsPage;