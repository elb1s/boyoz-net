import React from "react";
import regphoto from "../assets/register.png";
import LogForm from "../components/LogIn/LogForm";

const styles = {
  container: "flex justify-center w-full h-[90vh] ",
  containerLeft:
    "bg-white flex flex-col lg:items-start lg:w-[40vw] w-full items-center px-20 justify-center  gap-6",
  title: "text-3xl lg:text-4xl font-boldish tracking-wider  font-poppins",
  imageContainer: "hidden h-[60vh3]  w-[80vw] lg:block",
  image: " h-full w-full object-cover",
};

const LogIn = () => {
  return (
    <div className={styles.container}>
      {/*LEFT SIDE */}
      <div className={styles.containerLeft}>
        <h1 className={styles.title}>Log in to the Boyoz</h1>

        <LogForm />
      </div>

      <div className={styles.imageContainer}>
        <img src={regphoto} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default LogIn;
