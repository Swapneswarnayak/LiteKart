import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import { Grid } from "@mui/material";

const AdCard = ({ image }) => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardMedia
          sx={{
            height: 312,
            width: 450,
            position: "relative",
            transition: "display 3s ease",

            "&:hover .box": {
              display: "block",
              opacity: 0.7,
            },
          }}
          image={image}
          title={"Advertisement"}
        ></CardMedia>
      </Card>
    </Grid>
  );
};

export default AdCard;
