import React, { useEffect } from "react";

import '../../../style/global.css';
import { Link } from 'react-router-dom';

const Landing = () => {



  return (
    <div className="container px-2 pt-24 pb-96 mx-auto text-white">
      <h5 className="title text-center font-semibold text-6xl py-8">       
        Rick and Morty
      </h5>
      <h5 className="text-center sm:text-6xl text-4xl">
        Api Consumer
      </h5>

      <div className="text-center font-semibold sm:text-4xl text-5xl pt-24">
        <Link to="/characters"><p className="link-par text-center p-4">Characters</p></Link>
        <Link to="/characters"><p className="link-par text-center p-4">Locations</p></Link>
        <Link to="/characters"><p className="link-par text-center p-4">Episodes</p></Link>
      </div>
    </div>
  );

}
export default Landing;