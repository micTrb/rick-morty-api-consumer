import React from "react";
import CustomCard from '../../molecules/Card/CustomCard';
import LocationDetails from '../../molecules/LocationDetails/LocationDetails';

const LocationsGrid = ({ locations }) => {
    return (
        <div className="pt-12 xl:px-12 lg:px-36 px-12 flex-col md:flex-row gap-4 grid grid-cols-1 xl:grid-cols-2 justify-center">
            {locations.map((l) =>
                <LocationDetails 
                    key={l.id} locationDetails={l}/>)
            }
        </div>
    );

}
export default LocationsGrid;