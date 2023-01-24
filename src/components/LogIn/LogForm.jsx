import { TextField } from "@mui/material";
import { LogButton } from "./LogButton";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { AppContext } from "../../context/AppContext";
const LogForm = () => {
  const { setIsAuth, setUser, user } = useContext(AppContext);
  const navigate = useNavigate();
  const onSubmit = (values, actions) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        setUser(res.user.auth);
      })
      .catch((err) => console.log(err));
    actions.resetForm();
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="gap-8 flex flex-col w-72 h-56">
      <TextField
        id="email"
        name="email"
        label="Email"
        required
        size="small"
        value={values.email}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        required
        size="small"
        value={values.password}
        onChange={handleChange}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <LogButton />
    </form>
  );
};

export default LogForm;
