import { Box, Pagination, PaginationItem } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";


const renderPaginationItem = (item) => {
  const { page } = item;
  if (page <= 11 || page === 72) {
    return <PaginationItem {...item} />;
  } else if (page === 11 + 1) {
    return <PaginationItem disabled>...</PaginationItem>;
  }
  return null;
};

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
