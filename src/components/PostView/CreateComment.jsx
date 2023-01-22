import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { commentSchema } from "../../schemas/CommentSchema";
const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};
const CreateComment = () => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      userid: "",
      comment: "",
    },
    validationSchema: commentSchema,
    onSubmit,
  });
  return (
    <div className="max-w-3xl h-max mx-auto bg-white/70 rounded-md shadow-md p-8 mt-20">
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
