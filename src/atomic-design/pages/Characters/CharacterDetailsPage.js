import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterFromUrl } from "../../../requests-methods/characters";
import DetailsCard from '../../molecules/DetailsCard/DetailsCard';
import { useLocation } from 'react-router-dom';


const CharacterDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);


  const characterDetailsUrl = useSelector(state => state.characters.characterDetailsUrl);
  const characterDetails = useSelector(state => state.characters.characterDetails);

 
  return (
    <div className="py-24 px-12">
      <div className="lg:w-full mx-auto">
        <DetailsCard
          characterDetails={characterDetails}
        /> 
      </div>
    </div>
  );

}
export default CharacterDetailsPage;