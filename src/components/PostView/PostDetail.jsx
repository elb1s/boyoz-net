import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Comment from "./Comment";
const PostDetail = () => {
  const { postDetail, isDark } = useContext(AppContext);
  return (
    <div
      className={`${
        isDark ? "bg-indigo-900 text-white" : "bg-white/90"
      } shadow-md max-w-5xl h-max  p-8 rounded-sm  `}
    >
      <div>
        <h1 className="text-2xl font-boldish">{postDetail.title} </h1>
        <p className="text-[13px] text-gray-300 pb-4 pt-1 ">
          19 December 2020 19:35
        </p>
      </div>
      <div>{postDetail.quesBody}</div>
      <div className="justify-between flex mt-1 items-center ">
        <div className="flex gap-4 items-center"></div>
      </div>
      {postDetail.comments &&
        postDetail?.comments.map((comment) => (
          <Comment key={comment.authId} comment={comment} />
        ))}
    </div>
  );
};

export default PostDetail;
