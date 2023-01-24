import React, { useContext } from "react";
import Content from "../components/Home/Content";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`${
        isDark ? "bg-gray-900" : "bg-[#fbf8f8]"
      } lg:w-full  flex h-full`}
    >
      <Content />
    </div>
  );
};

export default Home;
