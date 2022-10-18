import React from "react";
import { Link } from "react-router-dom";
import classnames from 'classnames';

const CustomCard = (props) => {

  const {
    id,
    name,
    status,
    species,
    gender,
    image
  } = props;


  return (
    // <div className="flex flex-col text-start bg-white shadow-lg border-b-8 border-indigo-500 max-w-sm">
    //   <Link to={"/" + id} className="">
    //     <img className="rounded-t-lg" src={image} alt="" />
    //   </Link>
    //   <div className="">
    //     <Link to={"/" + id} >
    //       <h3 className="pb-4 text-gray-900 border-b border-gray-500 font-bold text-3xl tracking-tight mb-2">{name}</h3>
    //     </Link>
    //     <p className="pt-4 font-normal text-gray-700 mb-3">
    //       <b>Status </b>{status}
    //     </p>
    //     <p className="font-normal text-gray-700 mb-3">
    //       <b>Species: </b>{species}
    //     </p>
    //     <p className="font-normal text-gray-700 mb-3">
    //       <b>Gender: </b> {gender}
    //     </p>

    //     <Link to={"/" + id} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2 mt-6 text-center inline-flex items-center'>
    //       Read more
    //     </Link>

    //   </div>
    // </div>

    <Link to={"/characters/" + id} className="cursor-pointer">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg w-full ">
          <img className="w-full h-96 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image} alt="" />
          <div className="p-6 w-full max-w-xl flex flex-col justify-start bg-slate-700 rounded-b-lg md:rounded-none md:rounded-r-lg">
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
    </Link>

  );
}

export default CustomCard;