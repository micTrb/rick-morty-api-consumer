import React from "react";
import CustomCard from '../../molecules/Card/CustomCard';

const PostsGrid = ({ posts }) => {
    return (
        <div className="pt-12 px-24 flex flex-col md:flex-row gap-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {posts.map((p) =>
                <CustomCard
                    id={p.id}
                    key={p.id}
                    name={p.name}
                    postType={p.type}
                    imgUrl={p.accomodationDetails.gallery[0].url}
                    address={p.address}
                    price={p.price}
                    availableFrom={p.whenFree}
                    mq={p.accomodationDetails.mq || "No info"}
                    status={p.status}
                />)
            }



        </div>
    );

}
export default PostsGrid;