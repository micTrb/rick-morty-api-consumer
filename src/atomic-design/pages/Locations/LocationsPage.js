import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../../../style/global.css';

import { getCharactersList } from "../../../requests-methods/characters";
import CharactersGrid from "../../organisms/Grid/CharactersGrid";
import Paginator from '../../molecules/Paginator/Paginator';
import LocationsGrid from '../../organisms/Locations/LocationsGrid';
import { getNextLocationList, setLocations, getPrevLocationList } from '../../../requests-methods/locations';

const LocationsPage = () => {
  const dispatch = useDispatch();
  const locationList = useSelector(state => state.locations.locationList);

  useEffect(() => {
    console.log("Location page");
    dispatch(setLocations());
  }, [dispatch])

  return (
    <div className="container px-2 py-24 mx-auto">
      <Link to="/"><p className="pl-12 text-white text-2xl">← Home page</p></Link>
      <h5 className="text-center text-white font-semibold sm:text-6xl text-4xl pt-24 pb-8">
        All Locations
      </h5>
      <Paginator nextHandler={getNextLocationList} prevHandler={getPrevLocationList}/>
      <LocationsGrid locations={locationList} />
    </div>
  );

}
export default LocationsPage;
