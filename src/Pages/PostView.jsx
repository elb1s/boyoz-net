import { TextField } from "@mui/material";
import React from "react";
import Categories from "../components/Home/Categories";

import Comment from "../components/PostView/Comment";
import UserCart from "../components/PostView/UserCart";
import PostDetail from "../components/PostView/PostDetail";
import CreateComment from "../components/PostView/CreateComment";
const PostView = () => {
  return (
    <div className=" bg-[#fbf8f8] flex h-screen w-full  mx-auto  ">
      <div className=" md:flex gap-20 justify-center md:px-64 mt-10  min-w-md  mx-auto md:mx-0">
        <div>
          <PostDetail />
          <CreateComment />
          <Comment />
        </div>
        <UserCart />
      </div>
    </div>
  );
};

export default PostView;
