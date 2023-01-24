import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { createPoSchema } from "../../schemas/CreatePostSchema";
import { db, auth } from "../../firebase/Config";
import { addDoc, collection } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
const onSubmit = (values, actions) => {
  createPost(values.title, values.quesBody);
  actions.resetForm();
};
const createPost = async (title, quesBody) => {
  const postsCollecRef = collection(db, "posts");
  await addDoc(postsCollecRef, {
    title,
    quesBody,
    author: auth.currentUser.email,
    authId: auth.currentUser.uid,
    comments: [],
  });
};

const CreateForm = () => {
  const { isDark } = useContext(AppContext);
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      userid: "",
      title: "",
      quesBody: "",
      comments: [],
    },
    validationSchema: createPoSchema,
    onSubmit,
  });
  return (
    <form
      className={`${
        isDark ? "bg-gray-800" : "bg-indigo-100"
      }  mt-8 mx-auto   min-w-[80vw] md:min-w-[40vw] h-max px-10 md:py-10 py-4 shadow-md`}
    >
      <div
        className={`${
          isDark ? "text-white" : "text-black"
        }  flex flex-col gap-8`}
      >
        <h1 className="text-2xl md:text-3xl font-boldish">New Question</h1>
        <TextField
          id="title"
          name="title"
          label="Title"
          required
          size="small"
          value={values.title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          variant="outlined"
          placeholder="Title"
        />
        <TextField
          maxRows={16}
          id="quesBody"
          name="quesBody"
          label="Question"
          required
          size="small"
          value={values.quesBody}
          onChange={handleChange}
          error={touched.quesBody && Boolean(errors.quesBody)}
          helperText={touched.quesBody && errors.quesBody}
          variant="outlined"
          multiline
          placeholder="Type your question..."
        />
      </div>
      <div className="mt-5 flex justify-end">
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          publish
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
