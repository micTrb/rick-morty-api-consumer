import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../requests-methods/characters";
import { dateFormatterSlash } from "../../../utils/date/dateFormatter";

const ListCard = (props) => {

  const {
    id,
    name,
    image
  } = props;



  return (

    <div className="px-12 py-24 mx-auto flex flex-wrap">
      <h1 className="border-b border-gray-400 font-sans text-gray-900 text-8xl title-font font-medium mb-12">
        {name}
      </h1>

    </div>



  );

}
export default DetailedCard;