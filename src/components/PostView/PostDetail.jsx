import React, { useContext } from "react";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { AppContext } from "../../context/AppContext";
const PostDetail = () => {
  const { postDetail } = useContext(AppContext);

  return (
    <div className=" bg-white/90 shadow-md max-w-5xl h-max  p-8 rounded-sm  ">
      <div>
        <h1 className="text-2xl font-boldish">{postDetail.title} </h1>
        <p className="text-[13px] text-gray-600 pb-4 pt-1 ">
          19 December 2020 19:35
        </p>
      </div>
      {postDetail.quesBody}
      <div className="justify-between flex mt-1 items-center ">
        <div className="flex gap-4 items-center">
          <div className="items-center flex gap-2">
            <ThumbUpIcon />
            <span>155</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
