import React from "react";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const PostDetail = () => {
  return (
    <div className=" bg-neutral-100 max-w-5xl h-max  p-8 shadow-xl rounded-sm  ">
      <div>
        <h1 className="text-2xl font-boldish">How to fatch KDE on FreeBSD?</h1>
        <p className="text-[13px] text-gray-600 pb-4 pt-1 ">
          19 December 2020 19:35
        </p>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero
      cupiditate animi magni reiciendis deleniti veritatis laboriosam esse,
      perspiciatis nostrum dolorem laborum odio fugit saepe sed ducimus dicta
      impedit itaque.
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
            <ThumbUpIcon />
            <span>155</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
