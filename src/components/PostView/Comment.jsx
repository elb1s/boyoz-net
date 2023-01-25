import React, { useContext } from "react";
import av from "../../assets/avatar.jpg";
import { Avatar } from "@mui/material";
import { AppContext } from "../../context/AppContext";
const Comment = () => {
  const { isDark } = useContext(AppContext);
  const postDet = JSON.parse(localStorage.getItem("postDetail"));

  return (
    <>
      {postDet?.comments?.map((post, idx) => (
        <div
          key={idx}
          className={`${
            isDark ? "bg-indigo-400" : "bg-neutral-200"
          } rounded-3xl max-w-3xl mx-auto h-max  p-4 shadow-md mt-10 `}
        >
          <div className="flex  ">
            <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={av} />
            <div className="pl-4 pb-8">
              <p className=" text-black ">{post?.author} </p>
            </div>
          </div>
          <p className="bg-neutral-100 rounded-2xl p-2"> {post?.comment}</p>
        </div>
      ))}
    </>
  );
};

export default Comment;
