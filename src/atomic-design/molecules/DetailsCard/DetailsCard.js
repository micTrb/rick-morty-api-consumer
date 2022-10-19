import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classnames from "classnames";

const DetailsCard = (props) => {

  const {
    name,
    status,
    species,
    type,
    image,
    gender,
    origin,
    location,
    episode
  } = props.characterDetails;

  const dispatch = useDispatch();


  const statusLabel = (status) => {
    if (status === 'Dead') { return 'Dead' }
    else if (status === 'Alive') { return 'Alive' }
    else { return 'Unknown' }
  }


  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg w-full ">
        <img className="w-full h-96 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={image} alt="" />
        <div className="p-6 w-full flex flex-col justify-start bg-slate-700 rounded-b-lg md:rounded-none md:rounded-r-lg">
          <h5 className="pt-12 text-white text-start text-6xl font-bold mb-2">{name}</h5>

          <p className={classnames('mt-4 sm:w-1/4 w-full text-white text-2xl font-bold text-center px-2 py-1 rounded-lg', {
            'bg-red-500': status === 'Dead',
            'bg-green-500': status === 'Alive',
            'bg-white text-black': status === 'unknown'

          })}>{statusLabel(status)}</p>

          <p className="text-white text-start text-xl pt-12 pb-2">
            <span className="font-bold">Gender: </span>{gender}
          </p>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Species: </span>{species}
          </p>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Type: </span>{type}
          </p>

          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Last known location: </span>{location.name}
          </p>

          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Origin: </span>{origin.name}
          </p>


        </div>
      </div>
    </div>



  );

}
export default DetailsCard;