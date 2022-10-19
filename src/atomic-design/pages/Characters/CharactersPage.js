import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../../../style/global.css';

import { getCharactersList, getNextCharactersList, getPrevCharactersList } from "../../../requests-methods/characters";
import CharactersGrid from "../../organisms/Grid/CharactersGrid";
import Paginator from '../../molecules/Paginator/Paginator';
import Navbar from '../../organisms/Navbar/Navbar';
import Footer from '../../organisms/Footer/Footer';

const CharactersPage = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector(state => state.characters.charactersList);

  useEffect(() => {
    dispatch(getCharactersList());
  }, [dispatch])



  return (
    <div>
      <Navbar/>
      <div className="mx-auto">

        <h5 className="text-center text-white font-semibold sm:text-6xl text-4xl pt-24 pb-8">
          All characters
        </h5>
        <Paginator nextHandler={getNextCharactersList} prevHandler={getPrevCharactersList} />
        <CharactersGrid characters={charactersList} />
      </div>
      <Footer/>
    </div>
  );

}
export default CharactersPage;
