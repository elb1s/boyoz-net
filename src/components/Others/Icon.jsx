import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { AppProvider } from "../../context/AppContext";
export const Icon = () => {
  const { isDark, setIsDark } = useContext(AppProvider);
  return (
    <DarkModeIcon
      onClick={() => {
        setIsDark(!isDark);
      }}
      fontSize="large"
    />
  );
};
