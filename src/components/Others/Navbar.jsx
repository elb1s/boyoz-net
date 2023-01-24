import React, { useContext } from "react";
import { Icon } from "./Icon";
import Stack from "@mui/material/Stack";
import { RegButton } from "../Register/RegButton";
import { LogButton } from "../LogIn/LogButton";
import { Link, NavLink } from "react-router-dom";
import AskQuButton from "./AskQuButton";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { AppProvider } from "../../context/AppContext";
import LogOut from "./LogOut";

const Navbar = () => {
<<<<<<< HEAD
  const { isDark, isAuth, user } = useContext(AppProvider);
=======
  const { isDark, isAuth } = useContext(AppContext);
>>>>>>> parent of e88104a (added redirections)

  return (
    <div
      className={`${
        isDark ? "bg-indigo-400" : "bg-yellow-300"
      }  py-3 px-10  lg:px-40   mx-auto flex items-center justify-between`}
    >
      <div className="cursor-pointer">
        <Icon />
      </div>
      {isAuth ? (
        <>
          <AskQuButton />
          <div>
            <Button>
              <Link to="/">
                <HomeIcon />
              </Link>
            </Button>
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
