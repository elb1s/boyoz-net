import { Button } from "@mui/material";
<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppProvider } from "../../context/AppContext";
import { auth } from "../../firebase/Config";

const LogOut = () => {
  const { user, setUser } = useContext(AppProvider);
  const navigate = useNavigate();
=======
import React from "react";
import { auth } from "../../firebase/Config";

const LogOut = () => {
>>>>>>> parent of e88104a (added redirections)
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
