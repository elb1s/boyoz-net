import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants() {
  const [cat, setCat] = React.useState("");

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={cat}
          onChange={handleChange}
          label="cat"
        >
          <MenuItem value="">
            <em>Evren</em>
          </MenuItem>
          <MenuItem value={10}>Yazılım</MenuItem>
          <MenuItem value={20}>Dünya</MenuItem>
          <MenuItem value={30}>Mars</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
