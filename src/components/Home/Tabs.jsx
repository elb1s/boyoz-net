import React from "react";
import Chip from "@mui/material/Chip";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Stack } from "@mui/system";
const Tabs = () => {
  return (
    <Stack spacing={1} direction="row">
      <Chip icon={<AccessTimeIcon />} label="New" clickable />
      <Chip icon={<WhatshotIcon />} label="Hot" clickable />
      <Chip icon={<NorthEastIcon />} label="Top" clickable />
      <Chip icon={<DoneAllIcon />} label="Closed" clickable />
    </Stack>
  );
};

export default Tabs;
