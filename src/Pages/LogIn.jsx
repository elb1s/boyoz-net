import React from "react";
import regphoto from "../assets/register.png";
import RegForm from "../components/Register/RegForm";
const LogIn = () => {
  return (
    <div className="flex justify-center w-full h-[90vh] ">
      {/*LEFT SIDE */}
      <div className=" bg-purple-400 flex flex-col lg:items-start lg:w-[40vw] w-full items-center px-20 justify-center  gap-6">
        <h1 className="text-3xl font-boldish tracking-wider ">
          Log in to Boyoz
        </h1>

        <RegForm />
      </div>

      <div className="hidden w-[80vw] lg:block  ">
        <img src={regphoto} alt="" className=" h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default LogIn;
