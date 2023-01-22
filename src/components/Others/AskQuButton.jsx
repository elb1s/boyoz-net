import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import React from "react";

const AskQuButton = () => {
  return (
    <Button variant="contained" className="gap-1">
      <ControlPointIcon fontSize="small" />
      Ask Question
    </Button>
  );
};

export default AskQuButton;
