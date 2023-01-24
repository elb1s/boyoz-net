import React, { useContext } from "react";
import Content from "../components/Home/Content";
<<<<<<< HEAD
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
=======
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { isDark } = useContext(AppContext);

>>>>>>> parent of e88104a (added redirections)
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
