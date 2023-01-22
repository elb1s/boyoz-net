import React from "react";
import { Button, TextField } from "@mui/material";
import PostCateg from "./PostCateg";
const CreateForm = () => {
  return (
    <form className="mt-8 mx-auto md:mx-40 bg-indigo-100 min-w-[80vw] md:min-w-[50vw] h-[80vh] px-20 md:py-10 py-4 shadow-md">
      <div className=" flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl font-boldish">New Question</h1>
        <PostCateg />
        <div className="flex flex-col gap-2">
          <label>Title</label>
          <TextField variant="outlined" placeholder="Title" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Text</label>
          <TextField multiline placeholder="Type your question..." />
        </div>
      </div>
      <div className="mt-5 justify-end flex">
        <Button variant="contained" className="">
          publish
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
