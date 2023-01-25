import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export const Icon = () => {
  const { isDark, setIsDark } = useContext(AppContext);
  return (
    <DarkModeIcon
      onClick={() => {
        setIsDark(!isDark);
        localStorage.setItem("isDark", !isDark);
      }}
      fontSize="large"
    />
  );
};
