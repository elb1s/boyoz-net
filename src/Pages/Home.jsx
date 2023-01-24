import React, { useContext } from "react";
import Content from "../components/Home/Content";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { isDark, user } = useContext(AppContext);
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
      <Content />
    </div>
  );
};

export default Home;
