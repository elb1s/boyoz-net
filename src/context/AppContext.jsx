import { createContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [postList, setPostList] = useState([]);
  const [postDetail, setPostDeatil] = useState("");
  const [isDark, setIsDark] = useState(true);

  const values = {
    postList,
    setPostList,
    postDetail,
    setPostDeatil,
    isDark,
    setIsDark,
    isAuth,
    setIsAuth,
    setUser,
    user,
  };
  return <AppContext.Provider value={values}> {children} </AppContext.Provider>;
};
