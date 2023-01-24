import React, { useContext } from "react";
import bg from "../assets/bg.jpg";
import LogForm from "../components/LogIn/LogForm";
import { AppContext } from "../context/AppContext";

const LogIn = () => {
  const { isDark } = useContext(AppContext);
  const styles = {
    container: "flex justify-center w-full h-screen ",
    containerLeft: `${
      isDark ? "bg-gray-800" : "bg-white"
    } flex flex-col lg:items-start lg:w-[40vw] w-full items-center px-20 justify-center  gap-6`,
    title: `${
      isDark ? "text-white" : "text-black"
    } text-3xl lg:text-4xl font-boldish tracking-wider  font-poppins`,
    imageContainer: "hidden h-[60vh3]  w-[80vw] lg:block",
    image: " h-full w-full object-cover",
  };
  return (
    <div className={styles.container}>
      {/*LEFT SIDE */}
      <div className={styles.containerLeft}>
        <h1 className={styles.title}>Log in to the Boyoz</h1>

        <LogForm />
      </div>

      <div className={styles.imageContainer}>
        <img src={bg} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default LogIn;
