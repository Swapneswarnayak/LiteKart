import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import "./Mainbodystyle.css";
import Carder from "../../Productcard/Carder";
import productList from "../ProductList";
import AdCard from "../../Productcard/Adcard";

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
      <Box sx={{ mb: 2 }}>
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

      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={1.2} rowSpacing={1.2}>
          {productList.map((el, i) => {
            return <Carder key={i} props={el} />;
          })}
          <AdCard image={"/adv1.png"} />
          {productList.map((el, i) => {
            return <Carder key={i} props={el} />;
          })}
          <AdCard image={"/adv2.png"} />

        </Grid>
      </Box>
    </Box>
  );
};

export default Mainbody;
