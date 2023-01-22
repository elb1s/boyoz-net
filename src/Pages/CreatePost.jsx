import React from "react";
import CreateForm from "../components/CreatePost/CreateForm";
import Categories from "../components/Home/Categories";

const CreatePost = () => {
  return (
    <div className=" bg-[#fbf8f8] flex h-screen w-full md:mx-0 ">
      <Categories />
      <CreateForm />
    </div>
  );
};

export default CreatePost;
