import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BasicDemo from "../../Slider/Slider";

const Mainbody = () => {
  return (
    <Box
      sx={{
        width: "80%",
        border: "2px solid green",
        p: 3,
        fontFamily: "serif",
      }}
    >
      <Box sx={{ border: "2px solid black", mb: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "serif",
            color: "#333333",
            letterSpacing: 1.2,
            mb: 0.7,
          }}
        >
          All European brands
        </Typography>
        <p
          style={{
            fontFamily: "monospace",
            fontWeight: 500,
            letterSpacing: 1.2,
          }}
        >
          Shop independent brands from around the world at wholesale prices.
        </p>
      </Box>

      <Box sx={{ flexGrow: 1, border: "2px solid yellow" }}>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ border: "2px solid red" }}>
            <BasicDemo />
          </Grid>
          <Grid item xs={4} sx={{ border: "2px solid red" }}>
            hellow
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Mainbody;
