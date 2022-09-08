import { dateFormatterSlash } from '../../../utils/date/dateFormatter';
import { Link, useHistory } from "react-router-dom";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";


// Nome
// Tipo annuncio (Tra stanza singola, posto letto e appartamento)
// Immagine
// Prezzo
// Indirizzo
// MQ
// Data disponibilità
// Status (disponibile, non disponibile)


const CustomCard = (props) => {

  const {
    id,
    name,
    postType,
    imgUrl,
    address,
    price,
    mq,
    availableFrom,
    status
  } = props;



  return (
    <div className="text-start bg-white shadow-lg border-b-8 border-indigo-500 max-w-sm">
      <Link to={"/" + id}>
        <img className="rounded-t-lg" src={imgUrl} alt="" />
      </Link>
      <div className="p-5">
        <Link to={"/" + id} >
          <h3 className="pb-4 text-gray-900 border-b border-gray-500 font-bold text-3xl tracking-tight mb-2">{name}</h3>
        </Link>
        <p className="pt-4 font-normal text-gray-700 mb-3">
          <b>Available From: </b>{dateFormatterSlash(availableFrom)}
        </p>
        <p className="font-normal text-gray-700 mb-3">
          <b>Price: </b>{price} <b>€</b>
        </p>
        <p className="font-normal text-gray-700 mb-3">
          <b>Address: </b> {address.addressRoute + " " + address.addressZipCode + " " + address.addressCity}
        </p>
        <p className="font-normal text-gray-700 mb-3">
          <b>MQ: </b>{mq}
        </p>
        <p className="font-normal text-gray-700 mb-3">
          <b>Status: </b>{(status === 2 ? "Available" : "Not available")}
        </p>

        <Link to={"/" + id} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2 mt-6 text-center inline-flex items-center'>
          Read more
        </Link>

      </div>
    </div>
  );
}

export default CustomCard;