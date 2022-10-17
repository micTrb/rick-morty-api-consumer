import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../requests-methods/characters";
import { dateFormatterSlash } from "../../../utils/date/dateFormatter";

const DetailedCard = (props) => {

  const {
    id,
    name,
    description,
    img_1,
    img_2,
    img_3,
    adminFeeOpen,
    address,
    price,
    mq,
    availableFrom,
    smoker,
    minMonth,
    status,
    electricity,
    gas,
    utilities
  } = props;



  return (

    <div className="px-12 py-24 mx-auto flex flex-wrap">
      <h1 className="border-b border-gray-400 font-sans text-gray-900 text-8xl title-font font-medium mb-12">
        {name}
      </h1>

      <div className="flex flex-wrap md:-m-2 -m-1">
        {/* Gallery */}
        <div className="flex flex-wrap w-full lg:w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="rounded w-full object-cover h-full object-center block"
              src={img_1}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="rounded w-full object-cover h-full object-center block"
              src={img_2}
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="rounded w-full h-full object-cover object-center block"
              src={img_3}
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-12 mb-6 lg:mb-0">
          <p className="bg-red-100 p-4 rounded font-semibold text-gray-600 text-xl leading-relaxed mb-4">
            {adminFeeOpen}
          </p>
          <div className="flex border-t border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">Address</span>
            <span className="ml-auto text-gray-900 text-3xl text-end">{address ? address.addressRoute + " " + address.addressZipCode + " " + address.addressCity : "No info"}</span>
          </div>
          <div className="flex border-t border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">MQ</span>
            <span className="ml-auto text-gray-900 text-3xl">{mq}</span>
          </div>

          <div className="flex border-t border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">Bills included</span>
            <span className="ml-auto text-gray-900 text-3xl text-end"><b>Electriciy: </b>{(electricity === true ? "Included" : "Not included")}</span>
          </div>

          <div className="flex border-gray-200 py-4">
            <span className="ml-auto text-gray-900 text-3xl"><b>Gas: </b>{(gas === true ? "Included" : "Not included")}</span>
          </div>

          <div className="flex border-gray-200 py-2">
            <span className="ml-auto text-gray-900 text-3xl"><b>Utilities: </b>{(utilities === 0 ? "Not included" : "Included")}</span>
          </div>

          <div className="flex border-t border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">Minimum months rental</span>
            <span className="text-end ml-auto text-gray-900 text-3xl">{minMonth}</span>
          </div>

          <div className="flex border-t border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">Smoker allowed:</span>
            <span className="text-end ml-auto text-gray-900 text-3xl">{(smoker === 0 ? "Not allowed" : "Allowed")}</span>
          </div>

          <div className="flex border-t border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">Available from: </span>
            <span className="ml-auto text-gray-900 text-3xl">{dateFormatterSlash(availableFrom)}</span>
          </div>

          <div className="flex border-t border-b mb-6 border-gray-200 py-4">
            <span className="text-start text-gray-500 text-3xl">Status</span>
            <span className="ml-auto text-gray-900 text-3xl">{(status === 2 ? "Available" : "Not available")}</span>
          </div>



          <div className="flex pt-12 sm:pt-2">
            <span className="text-start font-medium text-6xl text-gray-900">
              {price} € / month
            </span>
          </div>

        </div>



        {/* Description */}
        <h1 className="font-sans text-gray-900 text-6xl title-font font-medium mt-12">
            
          </h1>
        <div className="flex mb-4 py-8">
          
          <a href className="leading-relaxed text-truncate text-start text-ellipsis overflow-hidden flex-grow text-gray-900 border-b border-t border-gray-500 py-2 text-4xl px-1">
            {description}
          </a>
        </div>



      </div>
    </div>



  );

}
export default DetailedCard;