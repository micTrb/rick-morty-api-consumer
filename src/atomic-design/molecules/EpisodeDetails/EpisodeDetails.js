import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCharacterFromUrl } from "../../../requests-methods/characters";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearResidentsAction } from "../../../redux/actions/charactersActions";

const EpisodeDetails = (props) => {

  const {
    id,
    name,
    air_date,
    episode,
    characters
  } = props.episodeDetails;

  const dispatch = useDispatch();


  useEffect(() => {
    console.log(props.episodeDetails);
  }, [])


  return (

        <div className="lg:mx-64 grid p-8 sm:grid-cols-3 grid-cols-1 bg-slate-600 hover:opacity-70 text-white">
          <div className="lg:mx-8 mb-4 lg:mb-0">
            <div className="text-md lg:mt-2 font-semibold tracking-wide">
              <p
                className="lg:text-end uppercase"
                >
                Air date
              </p>
              <p
                className="lg:text-end"
                >
                {air_date}
              </p>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <div className="mb-3">
              
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  {name}
                </p>
            </div>
            <p className="">
              Episode: {episode}
            </p>
            <p className="">
              Characters in episode: {characters.length}
            </p>
          </div>
        </div>


  )

}
export default EpisodeDetails;