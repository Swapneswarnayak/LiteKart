import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import { Box, Grid, Typography } from "@mui/material";

const Carder = ({ props }) => {
  console.log(props, "propppp");
  const { image, title, rating } = props;

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            height: 220,
            position: "relative",
            transition: "display 3s ease",

            "&:hover .box": {
              display: "block",
              opacity: 0.7,
            },
          }}
          image={image}
          title={title}
        >
          <Box
            className="box"
            sx={{
              position: "absolute",
              top: 90,
              left: 0,
              p: "4px",
              backgroundColor: "white",
              opacity: 0,
              display: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            <ChevronLeftIcon />
          </Box>
          <Box
            className="box"
            sx={{
              position: "absolute",
              top: 90,
              right: 0,
              p: "4px",
              backgroundColor: "white",
              opacity: 0,
              display: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            <ChevronRightIcon />
          </Box>
        </CardMedia>
        <CardContent sx={{ p: 0, m: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
              gap: "2px",
            }}
          >
            <FiberManualRecordIcon sx={{ fontSize: "5px" }} />
            {[0, 1, 2, 3, 2].map((el, i) => {
              return (
                <FiberManualRecordIcon
                  key={i}
                  sx={{ fontSize: "5px", opacity: 0.5 }}
                />
              );
            })}
          </Box>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              letterSpacing: 1,
              mt: 1,
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <StarIcon sx={{ fontSize: "15px" }} />
            <Typography variant="body2">{rating}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Carder;
