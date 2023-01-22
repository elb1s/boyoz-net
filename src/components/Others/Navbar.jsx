import React from "react";
import { Icon } from "./Icon";
import Stack from "@mui/material/Stack";
import { RegButton } from "../Register/RegButton";
import { LogButton } from "../LogIn/LogButton";
import { NavLink } from "react-router-dom";
import AskQuButton from "./AskQuButton";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="py-3 px-10  lg:px-40  bg-yellow-300 mx-auto flex items-center justify-between">
      <div>
        <NavLink to="/">
          <Icon />
        </NavLink>
      </div>
      <Button>
        <HomeIcon />
      </Button>
      <AskQuButton />
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
