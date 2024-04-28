import { Box, Pagination } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const Mypagination = () => {
  return (
    <Box>
      <Divider sx={{ mt: 1, mb: 3 }} />
      <Pagination
        size="large"
        count={72}
        defaultPage={1}
        siblingCount={6}
        boundaryCount={1}
        sx={{ display: "flex", justifyContent: "center" }}
      />
      <Divider sx={{ mt: 3, mb: 2 }} />
    </Box>
  );
};

export default Mypagination;
