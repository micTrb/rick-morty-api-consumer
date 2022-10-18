import React from "react";
import CustomCard from '../../molecules/Card/CustomCard';

const CharactersGrid = ({ characters }) => {
    return (
        <div className="pt-12 xl:px-12 lg:px-36 px-12 flex-col md:flex-row gap-4 grid grid-cols-1 xl:grid-cols-2 justify-center">
            {characters.map((c) =>
                <CustomCard
                    id={c.id}
                    key={c.id}
                    name={c.name}
                    image={c.image}
                    status={c.status}
                    gender={c.gender}
                    species={c.species}
                    type={c.type}
                    location={c.location}
                    origin={c.origin}
                    epidode={c.episode}
                    url={c.url}
                />)
            }



        </div>
    );

}
export default CharactersGrid;