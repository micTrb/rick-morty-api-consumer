import React from "react";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import { setCharacterDetailsUrlAction } from "../../../redux/actions/charactersActions";
import { useDispatch } from 'react-redux';
import history from '../../../services/history';
import { getCharacterDetailsGET } from '../../../requests-methods/characters';

const CustomCard = (props) => {

  const {
    id,
    name,
    status,
    species,
    gender,
    image,
    url
  } = props;

  const dispatch = useDispatch();


  const handleSetCharacterURL = () => {
    dispatch(setCharacterDetailsUrlAction(url));
    history.push('/characters/' + id);
    history.go();
  }

  const handleGetCharacterDetails = () => {
    dispatch(getCharacterDetailsGET(id, url));
  }


  return (

    <div onClick={handleGetCharacterDetails} className="cursor-pointer flex justify-center">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg w-full ">
        <img className=" w-full h-96 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={image} alt="" />
        <div className="hover:bg-slate-500 p-6 w-full max-w-xl flex flex-col justify-start bg-slate-700 rounded-b-lg md:rounded-none md:rounded-r-lg">
          <h5 className="pb-4 text-white text-start text-4xl font-bold mb-2">{name}</h5>
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
        </div>
      </div>
    </div>

  );
}

export default CustomCard;