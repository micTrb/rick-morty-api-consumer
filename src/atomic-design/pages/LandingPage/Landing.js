import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCharactersList } from "../../../requests-methods/characters";
import CharactersGrid from "../../organisms/Grid/CharactersGrid";
import Paginator from '../../molecules/Paginator/Paginator';

const Landing = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(state => state.characters.charactersList);

  useEffect(() => {
    dispatch(getCharactersList());
  }, [dispatch])



  return (
    <div className="container px-2 py-24 mx-auto">
      <h5 className="text-center text-gray-900 font-semibold text-6xl py-8">
        Roomless app
      </h5>
      <Paginator />
      <CharactersGrid characters={charactersList} />

    </div>
  );

}
export default Landing;