import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import PostView from "./Pages/PostView";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/postview" element={<PostView />} />
      </Routes>
    </Router>
  );
}

export default App;
