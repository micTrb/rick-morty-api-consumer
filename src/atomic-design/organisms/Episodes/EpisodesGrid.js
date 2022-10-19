import React from "react";
import CustomCard from '../../molecules/Card/CustomCard';
import LocationDetails from '../../molecules/LocationDetails/LocationDetails';
import EpisodeDetails from '../../molecules/EpisodeDetails/EpisodeDetails';

const EpisodesGrid = ({ episodes }) => {

	console.log(episodes);
	return (
    <div className="sm:px-12 px-8 py-16 mx-auto grid gap-2">
			{episodes.map((e) =>
				<EpisodeDetails
					key={e.id} episodeDetails={e} />)
			}
		</div>
	);

}
export default EpisodesGrid;