import * as yup from "yup";

const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required("Required"),
  password: yup
    .string()
    .matches(regEx, {
      message:
        "Password must contain: one digit,lowercase,uppercase and longer than 5",
    })
    .min(6)
    .required("Required"),
});
