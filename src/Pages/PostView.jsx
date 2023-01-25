import React, { useContext, useEffect } from "react";
import PostDetail from "../components/PostView/PostDetail";
import CreateComment from "../components/PostView/CreateComment";
import { AppContext } from "../context/AppContext";
import Comments from "../components/PostView/Comments";
const PostView = () => {
  const { isDark, isLoading, postList, postDetail } = useContext(AppContext);

  useEffect(() => {
    console.log(postList);
    console.log(postDetail);
  }, []);
  return (
    <div
      className={`${
        isDark ? "bg-gray-900" : "bg-[#fbf8f8]"
      }  flex h-screen w-full  min-w-4 mx-auto  `}
    >
      {
        <div className=" md:flex gap-20 justify-center  mt-10  min-w-md  mx-auto ">
          <div>
            <PostDetail />
            <CreateComment />
            <Comments />
          </div>
        </div>
      }
    </div>
  );
};

export default PostView;
