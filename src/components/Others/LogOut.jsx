import { Button } from "@mui/material";
import React from "react";
import { auth } from "../../firebase/Config";

const LogOut = () => {
  const signOut = () => {
    auth.signOut();
    localStorage.clear();
  };

  return (
    <Button onClick={signOut} variant="contained">
      LogOut
    </Button>
  );
};

export default LogOut;
