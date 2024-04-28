import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const BottomNav = () => {
  const navbarMenu = [
    "Featured",
    "New",
    "Home Decor",
    "Food & drink",
    "Women",
    "Beauty & Wellness",
    "Jewelry",
    "Paper & novelty",
    "Kids & baby",
    "Pets",
    "Men",
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          mb: 1,
          mt: 1,
          //           position:"fixed",
          //   top:30,
          //   zIndex:1,
          //   backgroundColor:"white"
        }}
      >
        {navbarMenu.map((el, i) => {
          return (
            <Typography
              variant="body2"
              sx={{
                letterSpacing: "0.5px",
                fontFamily: "monospace",
                color: "#333333",
              }}
            >
              {el}
            </Typography>
          );
        })}
      </Box>
      <Divider sx={{mt:1.5}} />
    </>
  );
};

export default BottomNav;
