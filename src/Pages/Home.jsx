import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Home/Content";
import { AppContext } from "../context/AppContext";
const Home = () => {
  const { isDark, user, isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !isAuth) {
      navigate("/login");
    }
  });
  return (
    <div
      className={`${
        isDark ? "bg-gray-900" : "bg-[#fbf8f8]"
      } lg:w-full  flex h-screen`}
    >
      {isAuth && user && <Content />}
    </div>
  );
};

export default Home;
