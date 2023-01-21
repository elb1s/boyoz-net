import React from "react";
import Categories from "../components/Home/Categories";
import Content from "../components/Home/Content";

const Home = () => {
  return (
    <div className="w-full bg-neutral-200 flex h-screen ">
      <Categories />
      <Content />
    </div>
  );
};

export default Home;
