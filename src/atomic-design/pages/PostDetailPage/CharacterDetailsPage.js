import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../requests-methods/characters";
import DetailsCard from '../../molecules/DetailsCard/DetailsCard';
import { useLocation } from 'react-router-dom';

const CharacterDetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const charId = location.pathname.substring(1);

  useEffect(() => {
    dispatch(getCharacter(charId));
  }, [dispatch])


  const characterDetailsPage = useSelector(state => state.characters.characterPage);

  return (
    <div className="py-24 px-12">
      <div className="lg:w-full mx-auto flex flex-wrap">
        <h5 className="text-start text-gray-900 underline font-normal text-5xl py-8 px-8">
          <a href="/">← Back to posts</a>
        </h5>
        <DetailsCard
          characterDetails={characterDetailsPage}
        /> 
      </div>
    </div>
  );

}
export default CharacterDetailsPage;