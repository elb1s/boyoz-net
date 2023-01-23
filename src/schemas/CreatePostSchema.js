import * as yup from "yup";

export const createPoSchema = yup.object().shape({
  title: yup.string().max(80).required("Title is required!"),
  quesBody: yup.string().min(5).max(950).required("Question is required!"),
});
