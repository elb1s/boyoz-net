import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import av from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import { AppContext } from "../../context/AppContext";
const Post = ({ post, deletePost }) => {
  const { postList, setPostDeatil } = useContext(AppContext);
  const getPostDetail = (id) => {
    const postDetails = postList.filter((post) => post.id === id);
    setPostDeatil(postDetails[0]);
  };
  const navigate = useNavigate();
  const goDetail = (id) => {
    getPostDetail(id);
    navigate(`/postview/${id}`);
  };
  return (
    <div>
      <div className="mt-4 mb-4 bg-white/90 p-3 shadow-sm xl:max-w-3xl h-max  rounded-sm cursor-pointer">
        <div onClick={() => goDetail(post.id)}>
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
        </div>

        <div className="flex justify-end mr-2">
          <Button onClick={() => deletePost(post.id)}>DELETE</Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
