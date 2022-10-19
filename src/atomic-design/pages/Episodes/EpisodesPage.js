import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../../../style/global.css';

import CharactersGrid from "../../organisms/Grid/CharactersGrid";
import Paginator from '../../molecules/Paginator/Paginator';
import LocationsGrid from '../../organisms/Locations/LocationsGrid';
import { getNextLocationList, setLocations, getPrevLocationList } from '../../../requests-methods/locations';
import Navbar from '../../organisms/Navbar/Navbar';
import { getNextEpisodeList, setEpisodes, getPrevEpisodeList } from '../../../requests-methods/episodes';
import EpisodesGrid from '../../organisms/Episodes/EpisodesGrid';
import Footer from "../../organisms/Footer/Footer";

const LocationsPage = () => {
  const dispatch = useDispatch();
  const episodesList = useSelector(state => state.episodes.episodesList);

  useEffect(() => {
    dispatch(setEpisodes()); 
  }, [dispatch])

  return (
    <div>
      <Navbar /> 
      <div className="mx-auto">

        <h5 className="text-center text-white font-semibold sm:text-6xl text-4xl pt-24 pb-8">
          All episodes
        </h5>
        <Paginator nextHandler={getNextEpisodeList} prevHandler={getPrevEpisodeList} />
        <EpisodesGrid episodes={episodesList} />
      </div>
      <Footer/>
    </div>
  );

}
export default LocationsPage;
