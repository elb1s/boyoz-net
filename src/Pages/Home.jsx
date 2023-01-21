import React from "react";
import Categories from "../components/Home/Categories";
import Content from "../components/Home/Content";

const Home = () => {
  return (
    <div className="lg:w-full bg-gray-200 flex h-screen ">
      <Categories />
      <Content />
    </div>
  );
};

export default Home;
