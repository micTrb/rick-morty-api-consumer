import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCharacterFromUrl } from "../../../requests-methods/characters";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearResidentsAction } from "../../../redux/actions/charactersActions";

const LocationDetails = (props) => {

  const {
    name,
    type,
    dimension,
    residents
  } = props.locationDetails;

  const dispatch = useDispatch();
  const locationResidents = useSelector(state => state.characters.residents);


  useEffect(() => {
    console.log(props.locationDetails);
    
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

            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">

              {locationResidents.map((r) =>

                <Link key={r.id} to={"/characters/" + r.id} className="cursor-pointer">
                  <div className="mb-12">
                    <img  src={r.image} class="w-12 h-12 rounded-full mx-auto shadow-lg mb-4" alt=""/>

                    <p className="font-bold mb-2">{r.name}</p>
                    <p className="text-gray-500">{r.species}</p>
                  </div>
                </Link>
              )}


            </div>
          </div>







        </div>
      </div>
    </div>

  )

}
export default LocationDetails;