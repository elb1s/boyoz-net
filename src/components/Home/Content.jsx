import React from "react";
import Tabs from "./Tabs";
import Posts from "./Posts";
const Content = () => {
  return (
    <div className="md:px-40 pt-8 min-w-md px-0 mx-auto md:mx-0">
      <Tabs />
      <Posts />
    </div>
  );
};

export default Content;
