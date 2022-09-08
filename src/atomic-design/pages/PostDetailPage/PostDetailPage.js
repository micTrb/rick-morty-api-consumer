import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../requests-methods/rooms";
import DetailedCard from '../../molecules/DetailedCard/DetailedCard';
import { useLocation } from 'react-router-dom';

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const postId = location.pathname.substring(1);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch])


  const postPage = useSelector(state => state.posts.postPage);

  return (
    <div className="py-24 px-12">
      <div className="lg:w-full mx-auto flex flex-wrap">
        <h5 className="text-start text-gray-900 underline font-normal text-5xl py-8 px-8">
          <a href="/">← Back to posts</a>
        </h5>
        <DetailedCard
          name={postPage.name}
          description={postPage.description}
          status={postPage.status}
          adminFeeOpen="Si prega di leggere la descrizione - Please read the description below"
          address={postPage.address}

          price={postPage.price}
          electricity={postPage.electricityIncluded}
          gas={postPage.gasIncluded}
          utilities={postPage.utilitiesIncluded}
          availableFrom={postPage.whenFree}
          minMonth={postPage.minMonthsRental}
          smoker={postPage.smokersPermission}
          mq={(postPage.accomodationDetails && postPage.accomodationDetails.mq) ? postPage.accomodationDetails.mq : "No info"}
          img_1={(postPage.accomodationDetails &&
            postPage.accomodationDetails.gallery &&
            postPage.accomodationDetails.gallery.length > 0 &&
            postPage.accomodationDetails.gallery[0].url)
            ? postPage.accomodationDetails.gallery[0].url : ""}

          img_2={(postPage.accomodationDetails &&
            postPage.accomodationDetails.gallery &&
            postPage.accomodationDetails.gallery.length > 0 &&
            postPage.accomodationDetails.gallery[1].url)
            ? postPage.accomodationDetails.gallery[1].url : ""}

          img_3={(postPage.accomodationDetails &&
            postPage.accomodationDetails.gallery &&
            postPage.accomodationDetails.gallery.length > 0 &&
            postPage.accomodationDetails.gallery[2].url)
            ? postPage.accomodationDetails.gallery[2].url : ""}

          theme="indigo" />


      </div>
    </div>
  );

}
export default PostDetailPage;