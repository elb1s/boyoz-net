import React, { useContext } from "react";
import { AppProvider } from "../../context/AppContext";
import Posts from "./Posts";
const Content = () => {
  const { isDark } = useContext(AppProvider);
  return (
    <div className={`${isDark ? "bg-gray-900" : "bg-[#fbf8f8]"} pt-8  mx-auto`}>
      <Posts />
    </div>
  );
};

export default Content;
