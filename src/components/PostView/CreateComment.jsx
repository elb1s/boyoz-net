import { Button, TextField } from "@mui/material";
import React from "react";

const CreateComment = () => {
  return (
    <div className="max-w-5xl h-max bg-white/70 rounded-md shadow-md p-8 mt-20">
      <form>
        <TextField
          inputProps={{
            style: {
              step: 300,
            },
          }}
          required
          multiline
          className="w-full "
        />
        <div className="mt-4 justify-end flex">
          <Button variant="contained" color="info">
            Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
