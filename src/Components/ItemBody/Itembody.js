import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Mainbody from "./Mainbody/Mainbody";

const Itembody = () => {
  return (
    <Box>
    <Typography variant="body2" sx={{ p: 2, display: "flex" }}>
      Home / &nbsp;{" "}
      <Typography variant="body2" sx={{ color: "grey" }}>
        All European brands
      </Typography>
    </Typography>
    <Divider />
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
    </Box>
);
};

export default Itembody;
