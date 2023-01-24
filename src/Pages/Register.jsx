import React, { useContext } from "react";
import bg from "../assets/bg.jpg";
import RegForm from "../components/Register/RegForm";
import { AppProvider } from "../context/AppContext";
const Register = () => {
  const { isDark } = useContext(AppProvider);

  const styles = {
    container: "flex justify-center w-full h-screen ",
    leftContainer: ` ${
      isDark ? "bg-gray-800 text-yellow-400" : "bg-[#ffffff]"
    } flex flex-col lg:items-start lg:w-[40vw] w-full items-center px-20 justify-center  gap-6`,
    title: `${
      isDark ? "" : "text-black"
    }text-3xl lg:text-4xl font-boldish tracking-wider`,
    text: ` ${
      isDark ? "text-white" : "text-black"
    }  leading-8 text-md lg:text-xl  tracking-wider `,
    imageContainer: "hidden w-[80vw] lg:block  ",
    image: " h-full w-full object-cover",
  };
  return (
    <div className={styles.container}>
      {/*LEFT SIDE */}
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Join the Boyoz</h1>
        <p className={styles.text}>
          We discuss why boyoz is so greasy and more!
        </p>
        <RegForm />
      </div>

      <div className={styles.imageContainer}>
        <img src={bg} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default Register;
