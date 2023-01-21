import React from "react";
import { Icon } from "./Icon";
import Stack from "@mui/material/Stack";
import { RegButton } from "./Register/RegButton";
import { LogButton } from "./LogIn/LogButton";
import { NavLink } from "react-router-dom";
import Search from "./Home/Search";

const Navbar = () => {
  return (
    <div className="py-6 px-10 md:px-40  bg-white mx-auto flex items-center justify-between">
      <div>
        <NavLink to="/">
          <Icon />
        </NavLink>
      </div>
      <Stack direction="row" spacing={2}>
        <NavLink to={"/register"}>
          <RegButton />
        </NavLink>
        <NavLink to={"/login"}>
          <LogButton />
        </NavLink>
      </Stack>
    </div>
  );
};

export default Navbar;
