import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Mainbody from "./Mainbody/Mainbody";

const Itembody = () => {
  return (
    <Box
      sx={{
        // border: "2px solid black",
        width: "90%",
        margin: "auto",
        display: "flex",
        mt: 1,
      }}
    >
      <Sidebar />
      <Mainbody />
    </Box>
  );
};

export default Itembody;
