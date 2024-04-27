import { Box, Typography } from "@mui/material";
import React from "react";

const Mainbody = () => {
  return (
    <Box
      sx={{
        width: "80%",
        // border: "2px solid green",
        p: 3,
        fontFamily: "serif",
      }}
    >
      <Box >
        <Typography
          variant="h5"
          sx={{ fontFamily: "serif", color: "#333333", letterSpacing: 1.2,mb:0.7 }}
        >
          All European brands
        </Typography>
        <p style={{ fontFamily: "monospace",fontWeight:500,letterSpacing: 1.2, }}>
          Shop independent brands from around the world at wholesale prices.
        </p>
      </Box>
    </Box>
  );
};

export default Mainbody;
