import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { advertiseBar, signInSpan } from "./TopnavStyle.js";

const CustomTypography = styled(Typography)({
  fontFamily: 'Graphik, sans-serif, nunito',
});

const TopNav = () => {
  return (
    <Box>
      <CustomTypography variant="subtitle2" sx={advertiseBar}>
        Shop wholesale online from over 1,00,000 brands.{" "}
        <Typography variant="body2" sx={signInSpan}>Sign up</Typography>
      </CustomTypography>
    </Box>
  );
};

export default TopNav;
