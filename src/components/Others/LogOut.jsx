import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { auth } from "../../firebase/Config";

const LogOut = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <Button onClick={signOut} variant="contained">
      LogOut
    </Button>
  );
};

export default LogOut;
