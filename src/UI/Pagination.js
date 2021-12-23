import React from "react";
import { Pagination, Stack, Box } from "@mui/material";

function MyPagination({ setPageNumber, info }) {
  let { pages } = info || {};

  return (
    <Box sx={{ mb: "15px" }}>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Pagination
          count={pages}
          onChange={(_, num) => setPageNumber(num)}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default MyPagination;
