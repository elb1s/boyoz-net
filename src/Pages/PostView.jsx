import React, { useContext } from "react";
import Comment from "../components/PostView/Comment";
import UserCart from "../components/PostView/UserCart";
import PostDetail from "../components/PostView/PostDetail";
import CreateComment from "../components/PostView/CreateComment";
import { AppProvider } from "../context/AppContext";
const PostView = () => {
  const { isDark } = useContext(AppProvider);
  return (
    <div
      className={`${
        isDark ? "bg-gray-900" : "bg-[#fbf8f8]"
      }  flex h-screen w-full  mx-auto  `}
    >
      <div className=" md:flex gap-20 justify-center md:px-64 mt-10  min-w-md  mx-auto md:mx-0">
        <div>
          <PostDetail />
          <CreateComment />
        </div>
        <UserCart />
      </div>
    </div>
  );
};

export default PostView;
