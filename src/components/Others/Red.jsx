import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Red = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
};

export default Red;
