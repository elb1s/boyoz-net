import React from "react";
import Categories from "../components/Home/Categories";
import Content from "../components/Home/Content";

const Home = () => {
  return (
    <div className="lg:w-full bg-[#fbf8f8] flex h-full ">
      <Categories />
      <Content />
    </div>
  );
};

export default Home;
