import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import av from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { auth } from "../../firebase/Config";
const Post = ({ post, deletePost }) => {
  const navigate = useNavigate();
  const { postList, setPostDeatil, isDark } = useContext(AppContext);
  const getPostDetail = (id) => {
    const postDetails = postList.filter((post) => post.id === id);
    setPostDeatil(postDetails[0]);
  };

  const goDetail = (id) => {
    getPostDetail(id);
    navigate(`/postview/${id}`);
  };
  return (
    <div>
      <div
        className={`${
          isDark ? "bg-gray-800 text-gray-300" : "bg-white/90"
        }  mt-4 mb-4  p-3 shadow-sm xl:max-w-3xl h-max    rounded-sm cursor-pointer`}
      >
        <div onClick={() => goDetail(post.id)}>
          <div className="flex">
            <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={av} />
            <div className="pl-4">
              <p className={`${isDark ? "text-pink-200" : "text-black"}`}>
                {post.author}
              </p>
              <p className="text-[12px] text-gray-500 ">5 min ago</p>
            </div>
          </div>
          <div className="mt-4 h-22 overflow-hidden ">
            <h1 className="font-boldish text-xl">{post.title}</h1>
            <p
              className={` ${
                isDark ? "text-white" : "text-black "
              }mt-2  hidden md:block`}
            >
              {post.quesBody}
            </p>
          </div>
        </div>
        {post.authId === auth.currentUser.uid && (
          <div className="flex justify-end mr-2">
            <Button onClick={() => deletePost(post.id)}>DELETE</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
