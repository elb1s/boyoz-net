import React, { useContext, useEffect } from "react";
import Content from "../components/Home/Content";
import { AppProvider } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { isDark, user } = useContext(AppProvider);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  });
  return (
    <div
      className={`${
        isDark ? "bg-gray-900" : "bg-[#fbf8f8]"
      } lg:w-full  flex h-full`}
    >
      {user && <Content />}
    </div>
  );
};

export default Home;
