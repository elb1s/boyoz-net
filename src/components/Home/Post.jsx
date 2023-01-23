import React from "react";
import Avatar from "@mui/material/Avatar";
import av from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import { auth } from "../../firebase/Config";
const Post = ({ post, deletePost }) => {
  return (
    <>
      <div className="mt-4 mb-4 bg-white/90 p-3 shadow-sm xl:max-w-3xl h-max  rounded-sm">
        <div className="flex">
          <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={av} />
          <div className="pl-4">
            <p className=" text-black "> {post.author}</p>
            <p className="text-[12px] text-gray-600 ">5 min ago</p>
          </div>
        </div>
        <div className="mt-4 h-22 overflow-hidden ">
          <h1 className="font-boldish text-xl">{post.title}</h1>
          <p className="text-black mt-2  hidden md:block">{post.quesBody}</p>
        </div>
        {post.authId === auth.currentUser.uid && (
          <div className="flex justify-end mr-2">
            <Button onClick={() => deletePost(post.id)}>DELETE</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
