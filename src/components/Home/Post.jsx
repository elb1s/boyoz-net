import React from "react";
import Avatar from "@mui/material/Avatar";
import av from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Post = () => {
  return (
    <div className="mt-4 bg-white/90 p-3 shadow-sm   xl:max-w-3xl h-max  rounded-sm ">
      <div className="flex">
        <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={av} />

        <div className="pl-4">
          <p className=" text-black ">Remy Sharp</p>
          <p className="text-[12px] text-gray-600 ">5 min ago</p>
        </div>
      </div>
      <div className="mt-4 h-22 overflow-hidden ">
        <h1 className="font-boldish text-xl">How to patch KDE on FreeBSD?</h1>
        <p className="text-black mt-2  hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          molestias, ut sed ipsum, quisquam Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloremque molestias, ut sed ipsum,
          quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque molestias, ut sed ipsum, quisquam
        </p>
      </div>
      <div className="justify-between flex mt-1 items-center ">
        <div className="">
          <Button size="small" variant="text">
            Javascript
          </Button>
          <Button size="small" variant="text">
            Linux
          </Button>
          <Button size="small" variant="text">
            overflow
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="items-center flex gap-2">
            <ChatBubbleOutlineIcon />
            <span> 14</span>
          </div>
          <div className="items-center flex gap-2">
            <ThumbUpIcon />
            <span>155</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
