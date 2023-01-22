import React from "react";
import { Avatar } from "@mui/material";
import avat from "../../assets/profileAvatar.png";
const UserCart = () => {
  return (
    <div className="h-48 mx-auto min-w-[200px]  w-[250px] bg-purple-400  hidden xl:block shadow-xl rounded-lg">
      <Avatar
        sx={{ width: 120, height: 120, margin: "auto", marginTop: 2 }}
        alt="Remy Sharp"
        src={avat}
      />
      <h1 className="text-center mt-2 text-2xl"> Remy Sharp</h1>
    </div>
  );
};

export default UserCart;
