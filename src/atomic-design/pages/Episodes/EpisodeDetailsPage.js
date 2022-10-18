import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../requests-methods/characters";
import DetailsCard from '../../molecules/DetailsCard/DetailsCard';
import { useLocation } from 'react-router-dom';

const EpisodeDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const charId = location.pathname.substring(1);

  useEffect(() => {
    //dispatch(getCharacter(charId));
  }, [dispatch])


  const characterDetailsPage = useSelector(state => state.characters.characterPage);

  return (
    <div className="py-24 px-12">
      <div className="lg:w-full mx-auto">

        <DetailsCard
          characterDetails={characterDetailsPage}
        /> 
      </div>
    </div>
  );

}
export default EpisodeDetailsPage;