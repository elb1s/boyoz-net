import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import avat from "../../assets/profileAvatar.png";
import { AppContext } from "../../context/AppContext";
const UserCart = () => {
  const { postDetail } = useContext(AppContext);

  return (
    <div className="h-48 mx-auto min-w-[200px]  w-[250px] bg-purple-100  hidden xl:block shadow-sm rounded-lg">
      <Avatar
        sx={{ width: 120, height: 120, margin: "auto", marginTop: 2 }}
        alt="Remy Sharp"
        src={avat}
      />
      <h1 className="text-center mt-2 text-2xl"> {postDetail.author} </h1>
    </div>
  );
};

export default UserCart;
