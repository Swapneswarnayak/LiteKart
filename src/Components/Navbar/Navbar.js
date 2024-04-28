import React from "react";
import TopNav from "./TopNav/TopNav";
import Midnav from "./MidNav/Midnav";
import BottomNav from "./BottomNav/BottomNav";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <TopNav />
      <Box
        sx={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "white" }}
      >
        <Midnav />
        <BottomNav />
      </Box>
    </>
  );
};

export default Navbar;
