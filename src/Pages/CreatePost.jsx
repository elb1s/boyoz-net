import React, { useContext } from "react";
import CreateForm from "../components/CreatePost/CreateForm";
import { AppContext } from "../context/AppContext";

const CreatePost = () => {
  const { isDark, isAuth, user } = useContext(AppContext);
  return (
    <>
      {isAuth && user && (
        <div
          className={`${
            isDark ? "bg-gray-900" : "bg-[#fbf8f8]"
          }   flex h-screen w-full mx-auto`}
        >
          <CreateForm />
        </div>
      )}
    </>
  );
};

export default CreatePost;
