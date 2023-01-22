import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import av from "../../assets/avatar.jpg";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Avatar } from "@mui/material";

const Comment = () => {
  return (
    <div className="bg-orange-200 rounded-3xl max-w-3xl mx-auto h-max  p-4 shadow-md mt-10 ">
      <div className="flex  ">
        <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={av} />

        <div className="pl-4 pb-6">
          <p className=" text-black ">Remy Sharp</p>
          <p className="text-[12px] text-gray-600 ">5 min ago</p>
        </div>
      </div>
      <p className="bg-neutral-100 rounded-2xl p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa soluta
      </p>
      <div className=" flex mt-4 items-center  gap-3 justify-end">
        <ThumbUpIcon />
        <ThumbDownIcon />
      </div>
    </div>
  );
};

export default Comment;
