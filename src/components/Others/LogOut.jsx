import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppProvider } from "../../context/AppContext";
import { auth } from "../../firebase/Config";

const LogOut = () => {
  const { user, setUser } = useContext(AppProvider);
  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  });
  return (
    <Button onClick={signOut} variant="contained">
      LogOut
    </Button>
  );
};

export default LogOut;
