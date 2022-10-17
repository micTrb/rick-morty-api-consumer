import React from "react";
import CustomCard from '../../molecules/Card/CustomCard';

const CharactersGrid = ({ characters }) => {
    return (
        <div className="pt-12 px-24 flex-col md:flex-row gap-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {characters.map((c) =>
                <CustomCard
                    id={c.id}
                    key={c.id}
                    name={c.name}
                    image={c.image}
                    status={c.status}
                    gender={c.gender}
                    species={c.species}
                />)
            }



        </div>
    );

}
export default CharactersGrid;