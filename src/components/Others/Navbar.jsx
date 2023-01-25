import React, { useContext } from "react";
import { Icon } from "./Icon";
import Stack from "@mui/material/Stack";
import { RegButton } from "../Register/RegButton";
import { LogButton } from "../LogIn/LogButton";
import { Link, NavLink } from "react-router-dom";
import AskQuButton from "./AskQuButton";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Button } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import av from "../../assets/avatar.svg";
import LogOut from "./LogOut";

const Navbar = () => {
  const { isDark, isAuth, user } = useContext(AppContext);

  return (
    <div
      className={`${
        isDark ? "bg-indigo-400" : "bg-yellow-300"
      }  py-3 px-10 lg:px-40   mx-auto flex items-center justify-between`}
    >
      <div className="cursor-pointer">
        <Icon />
      </div>
      {isAuth && user ? (
        <>
          <AskQuButton />

          <div className="flex items-center">
            <div className="md:flex items-center gap-3 hidden ">
              <p className="md:text-xs">{user.email} </p>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src={av}
              />
            </div>
            <Link to="/">
              <Button>
                <HomeIcon />
              </Button>
            </Link>
            <LogOut />
          </div>
        </>
      ) : (
        <>
          <Stack direction="row" spacing={2}>
            <NavLink to={"/register"}>
              <RegButton />
            </NavLink>
            <NavLink to={"/login"}>
              <LogButton />
            </NavLink>
          </Stack>
        </>
      )}
    </div>
  );
};

export default Navbar;
