import "./App.css";
import Navbar from "./components/Others/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import PostView from "./Pages/PostView";
import { createTheme, ThemeProvider } from "@mui/material";
import CreatePost from "./Pages/CreatePost";
import { AppContext } from "./context/AppContext";
import { useState } from "react";
import Red from "./components/Others/Red";
function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#4a4ab9",
        contrastText: "rgba(255,255,255,0.87)",
        dark: "#3F44A2",
      },
      secondary: {
        main: "#6465ff",
        dark: "#3F44A2",
        contrastText: "rgba(255,255,255,0.87)",
      },
      info: {
        main: "#303960",
        dark: "#626d9e",
      },
    },
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [postList, setPostList] = useState([]);
  const [postDetail, setPostDetail] = useState([]);
  const [comments, setComments] = useState([]);
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark"));
  const [isLoading, setIsLoading] = useState(false);
  const values = {
    postList,
    setPostList,
    postDetail,
    setPostDetail,
    isDark,
    setIsDark,
    isAuth,
    setIsAuth,
    user,
    setUser,
    comments,
    setComments,
    isLoading,
    setIsLoading,
  };
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={values}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/postview/:id" element={<PostView />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/*" element={<Red />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
