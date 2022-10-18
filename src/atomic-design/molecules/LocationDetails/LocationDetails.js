import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCharacterFromUrl } from "../../../requests-methods/characters";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearResidentsAction } from "../../../redux/actions/charactersActions";

const LocationDetails = (props) => {

  const {
    id,
    name,
    type,
    dimension,
    residents
  } = props.locationDetails;

  const dispatch = useDispatch();


  useEffect(() => {
    console.log(props.locationDetails);
  }, [])


  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg w-full ">
        <div className="p-6 w-full flex flex-col justify-start bg-slate-700">
          <h5 className="py-4 text-white text-start text-4xl font-bold mb-2">{name}</h5>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Type: </span>{type}
          </p>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Dimension: </span>{dimension}
          </p>

          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Residents: </span> {residents.length}
          </p>


        </div>
      </div>
    </div>

  )

}
export default LocationDetails;