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
    <Box sx={{  display:"flex", justifyContent:"center", gap:"20px",mb:1,mt:1 }}>
      {navbarMenu.map((el, i) => {
        return <Typography variant="body2" sx={{letterSpacing:"0.5px", fontFamily:"monospace", color:"#333333"}}>{el}</Typography>;
      })}
    </Box>
        <Divider  />
        <Typography variant="body2" sx={{p:2, display:"flex"}}>
        Home / &nbsp; <Typography variant="body2" sx={{color:"grey"}}>All European brands</Typography>
        </Typography>
        <Divider />

    </>
  );
};

export default BottomNav;
