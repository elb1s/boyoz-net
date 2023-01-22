import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Search from "./Search";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StyleIcon from "@mui/icons-material/Style";
const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (e, idx) => {
    setSelectedIndex(idx);
  };
  return (
    <List
      sx={{
        marginLeft: "5rem",
        height: "100vh",
      }}
      className="hidden md:block"
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem disablePadding>
        <ListItemText primary={<Search />} />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(e) => handleListItemClick(e, 1)}
        >
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary="Questions" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(e) => handleListItemClick(e, 2)}
        >
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText primary="Tags" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default Categories;
