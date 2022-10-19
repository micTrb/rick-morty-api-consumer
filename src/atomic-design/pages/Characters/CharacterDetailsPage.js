import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterFromUrl } from "../../../requests-methods/characters";
import DetailsCard from '../../molecules/DetailsCard/DetailsCard';
import { useLocation } from 'react-router-dom';
import Navbar from '../../organisms/Navbar/Navbar';
import Footer from '../../organisms/Footer/Footer';


const CharacterDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);


  const characterDetailsUrl = useSelector(state => state.characters.characterDetailsUrl);
  const characterDetails = useSelector(state => state.characters.characterDetails);


  return (
    <div className="">
      <Navbar />
      <div className="lg:w-full mx-auto mt-12 p-12">
        <DetailsCard
          characterDetails={characterDetails}
        />
      </div>
      <Footer/>
    </div>
  );

}
export default CharacterDetailsPage;