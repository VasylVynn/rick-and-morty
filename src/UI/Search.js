import { TextField, Typography } from "@mui/material";
import { Box, alpha } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";

function Search({ setSearch }) {
  const onChangeHandler = (search) => {
    setSearch(search);
  };
  return (
    <>
      <Typography variant="h6" sx={{ verticalAlign: "center", mr: "5px" }}>
        Search:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: alpha("#1976D2", 0.2),
          borderRadius: "5px",
          px: "20px",
          my: "5px",
          width: "300px",
        }}
      >
        <SearchIcon sx={{ alignSelf: "flex-end", marginBottom: "5px" }} />
        <TextField
          sx={{
            margin: "5px",
          }}
          onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
          id="standard-basic"
          label="Search by name"
          variant="standard"
        />
      </Box>
    </>
  );
}

export default Search;
