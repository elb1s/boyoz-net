import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useFormik } from "formik";
import { commentSchema } from "../../schemas/CommentSchema";
import { db } from "../../firebase/Config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useParams } from "react-router-dom";

const CreateComment = () => {
  const { isDark, setPostDetail, postDetail } = useContext(AppContext);
  const { id } = useParams();

  const createComment = async (author, authorId, comment) => {
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      comments: arrayUnion({ author, authorId, comment }),
    });
    setPostDetail({
      ...postDetail,
      comments: [...postDetail.comments, { author, authorId, comment }],
    });
  };

  const onSubmit = (values, actions) => {
    createComment(values.author, values.authId, values.comment);
    actions.resetForm();
  };
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      author: JSON.parse(localStorage.getItem("user")).email,
      authId: JSON.parse(localStorage.getItem("user")).uid,
      comment: "",
    },
    validationSchema: commentSchema,
    onSubmit,
  });
  return (
    <div
      className={`${
        isDark ? "bg-indigo-800 text-white" : "bg-white/70"
      }  max-w-3xl h-max mx-auto  rounded-md shadow-md p-8 mt-20`}
    >
      <form>
        <TextField
          inputProps={{
            style: {
              step: 300,
            },
          }}
          id="comment"
          name="comment"
          label="Comment"
          size="small"
          value={values.comment}
          onChange={handleChange}
          error={touched.comment && Boolean(errors.comment)}
          helperText={touched.comment && errors.comment}
          variant="outlined"
          multiline
          className="w-full "
        />
        <div className="mt-4 justify-end flex">
          <Button
            variant="contained"
            color="info"
            type="submit"
            onClick={handleSubmit}
          >
            Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
