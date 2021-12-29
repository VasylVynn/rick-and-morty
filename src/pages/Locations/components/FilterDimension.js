import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import React from "react";

function FilterDimension({
  updateDimension,
  setPageNumber,
  dimension,
  updateType,
}) {
  let dimensionArray = [
    "Dimension C-137",
    "Replacement Dimension",
    "Cronenberg Dimension",
    "unknown",
    "Fantasy Dimension",
    "Dimension 5-126",
    "Cromulon Dimension",
    "Dimension C-500A",
  ];

  const handleChange = (event) => {
    updateDimension(event.target.value);
    setPageNumber(1);
  };
  return (
    <Box sx={{ mt: "10px", maxWidth: "90%", ml: "15px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose dimension</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dimension}
          label="Choose dimension"
          onChange={handleChange}
        >
          {dimensionArray.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterDimension;
