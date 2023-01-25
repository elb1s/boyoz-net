import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const PostDetail = () => {
  const { isDark } = useContext(AppContext);
  const post = JSON.parse(localStorage.getItem("postDetail"));
  return (
    <div
      className={`${
        isDark ? "bg-indigo-900 text-white" : "bg-white/90"
      } shadow-md max-w-5xl h-max min-w-min  p-8 rounded-sm  `}
    >
      <div>
        <h1 className="text-2xl font-boldish">{post?.title} </h1>
      </div>
      <div>{post?.quesBody}</div>
    </div>
  );
};

export default PostDetail;
