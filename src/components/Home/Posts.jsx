import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/Config";
import Post from "./Post";

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const postsCollRef = collection(db, "posts");
  const getPosts = async () => {
    const data = await getDocs(postsCollRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    getPosts();
  }, [postList]);
  return (
    <div>
      {postList.map((post) => (
        <Post post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default Posts;
