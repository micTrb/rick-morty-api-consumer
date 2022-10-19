import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../../../style/global.css';

import { getCharactersList } from "../../../requests-methods/characters";
import CharactersGrid from "../../organisms/Grid/CharactersGrid";
import Paginator from '../../molecules/Paginator/Paginator';
import LocationsGrid from '../../organisms/Locations/LocationsGrid';
import { getNextLocationList, setLocations, getPrevLocationList } from '../../../requests-methods/locations';
import Navbar from '../../organisms/Navbar/Navbar';
import Footer from "../../organisms/Footer/Footer";

const LocationsPage = () => {
  const dispatch = useDispatch();
  const locationList = useSelector(state => state.locations.locationList);

  useEffect(() => {
    console.log("Location page");
    dispatch(setLocations());
  }, [dispatch])

  return (
    <div>
      <Navbar /> 
      <div className="mx-auto">

        <h5 className="text-center text-white font-semibold sm:text-6xl text-4xl pt-24 pb-8">
          All Locations
        </h5>
        <Paginator nextHandler={getNextLocationList} prevHandler={getPrevLocationList} />
        <LocationsGrid locations={locationList} />
      </div>
      <Footer/>
    </div>
  );

}
export default LocationsPage;
