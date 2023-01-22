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
      <Chip icon={<AccessTimeIcon />} label="New" clickable color="info" />
      <Chip icon={<WhatshotIcon />} label="Hot" clickable color="info" />
      <Chip icon={<NorthEastIcon />} label="Top" clickable color="info" />
      <Chip icon={<DoneAllIcon />} label="Closed" clickable color="info" />
    </Stack>
  );
};

export default Tabs;
