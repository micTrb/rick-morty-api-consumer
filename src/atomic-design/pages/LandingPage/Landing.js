import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList } from "../../../requests-methods/rooms";
import PostsGrid from "../../organisms/Grid/PostsGrid";
import Paginator from '../../molecules/Paginator/Paginator';

const Landing = () => {
  const dispatch = useDispatch();
  const postsList = useSelector(state => state.posts.postsList);
  const pageNumber = useSelector(state => state.page.pageNumber);

  useEffect(() => {
    dispatch(getList(pageNumber));
  }, [dispatch])



  return (
    <div className="container px-2 py-24 mx-auto">
      <h5 className="text-center text-gray-900 font-semibold text-6xl py-8">
        Roomless app
      </h5>

      <PostsGrid posts={postsList} />
      <Paginator />

    </div>
  );

}
export default Landing;