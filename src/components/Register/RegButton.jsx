import { Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const RegButton = () => {
  return (
    <Button variant="outlined" className="gap-2" type="submit">
      <PersonAddIcon /> Register
    </Button>
  );
};
