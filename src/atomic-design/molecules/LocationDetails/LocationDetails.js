import React, { useEffect, useState } from "react";
import { addCharacterFromUrl } from "../../../requests-methods/characters";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const LocationDetails = (props) => {

  const {
    name,
    type,
    dimension,
    residents
  } = props.locationDetails;

  const dispatch = useDispatch();
  const locationResidents = useSelector(state => state.characters.residents);


  let resArray = [];

  useEffect(() => {
    residents.map(r => {
      dispatch(addCharacterFromUrl(r));
    });
  }, [dispatch])


  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg w-full ">
        <div className="p-6 w-full flex flex-col justify-start bg-slate-700 rounded-b-lg md:rounded-none md:rounded-r-lg">
          <h5 className="py-12 text-white text-start text-6xl font-bold mb-2">{name}</h5>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Type: </span>{type}
          </p>
          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Dimension: </span>{dimension}
          </p>

          <p className="text-white text-start text-xl py-2">
            <span className="font-bold">Residents: </span>
          </p>


          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

              {locationResidents.map((r) =>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="w-full rounded-full sm:rounded-none sm:rounded-l-lg" src={r.image} alt="Avatar" />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Bonnie Green</a>
                  </h3>
                </div>
              </div>
              )}


            </div>
          </div>







        </div>
      </div>
    </div>

  )

}
export default LocationDetails;