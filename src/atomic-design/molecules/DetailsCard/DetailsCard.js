import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../requests-methods/characters";
import { dateFormatterSlash } from "../../../utils/date/dateFormatter";

const DetailsCard = (props) => {

  const {
    name,
    status,
    species,
    image,
    type,
    gender,
  } = props.characterDetails;



  return (

    <div className="container mx-auto">
      <div className="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10">
        <div className="flex flex-col md:flex-row lg:flex-row  items-center">
          <div className="flex w-full h-full md:h-full lg:h-fit relative">
            <div className="w-full pr-4 relative">
              <img src={image} className="w-full h-full object-cover object-top rounded-lg bg-white"/>
            </div>
          </div>
          <div className="w-full pt-8 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-xl">{name}</h2>
              <div className="flex flex-wrap text-center pt-4 mb-2">
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Tailwind CSS</div>
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">React</div>
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Next.js</div>
              </div>
              <p className="text-xs leading-relaxed text-gray-50">This revolutionary email design kit is going to transform the way in which you send modern emails.</p>
              <ul className="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                <li>{status}</li>
                <li>{gender}</li>
                <li>{type}</li>
                <li> 20MB of JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>



  );

}
export default DetailsCard;