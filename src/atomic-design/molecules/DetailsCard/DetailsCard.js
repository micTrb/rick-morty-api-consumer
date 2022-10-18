import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classnames from "classnames";
import { getLocation, getLocationDetailsGET } from '../../../requests-methods/locations';
import { Link } from 'react-router-dom';
import { setLocationDetailsUrlAction } from '../../../redux/actions/locationActions';
import history from '../../../services/history';

const DetailsCard = (props) => {

  const {
    name,
    status,
    species,
    image,
    gender,
    origin,
    location,
    episode
  } = props.characterDetails;

  const dispatch = useDispatch();

  const handleGetLocationDetails = () => {
    dispatch(getLocationDetailsGET(origin.name, origin.url));
  }


  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg w-full ">
        <img className="w-full h-96 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={image} alt="" />
        <div className="p-6 w-full flex flex-col justify-start bg-slate-700 rounded-b-lg md:rounded-none md:rounded-r-lg">
          <h5 className="py-12 text-white text-start text-6xl font-bold mb-2">{name}</h5>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Status: </span>{status}
            <span className={classnames('', {
              'text-red-500': status === 'Dead',
              'text-green-500': status === 'Alive'
            })}> ◉</span>

          </p>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Gender: </span>{gender}
          </p>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Species: </span>{species}
          </p>

            <p onClick={handleGetLocationDetails} className="hover:underline cursor-pointer text-white text-start text-xl py-2">
              <span className="font-bold">Origin: </span>{origin.name}
            </p>
        </div>
      </div>
    </div>



  );

}
export default DetailsCard;