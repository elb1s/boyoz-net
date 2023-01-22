import "./App.css";
import Navbar from "./components/Others/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import PostView from "./Pages/PostView";
import { createTheme, ThemeProvider } from "@mui/material";
import CreatePost from "./Pages/CreatePost";
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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/postview" element={<PostView />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
