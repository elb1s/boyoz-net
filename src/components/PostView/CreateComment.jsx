import { TextField } from "@mui/material";
import React from "react";

const CreateComment = () => {
  return (
    <div className="max-w-5xl h-max  bg-purple-200 p-8 mt-20">
      <TextField multiline className="w-80" />
    </div>
  );
};

export default CreateComment;
