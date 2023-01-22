import * as yup from "yup";

export const commentSchema = yup.object().shape({
  comment: yup.string().min(5).max(650).required("Comment is required!"),
});
