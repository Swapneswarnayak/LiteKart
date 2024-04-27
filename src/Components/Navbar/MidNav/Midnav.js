import React from "react";
import { Box, Divider, Typography, alpha, styled } from "@mui/material";
import { blog, blog_space, main_div, nav_logo, search, searchBar, sign_up } from "./MidnavStyle";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import LanguageIcon from "@mui/icons-material/Language";
import MyMenu from "../Menu/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    // vertical padding + font size from searchIcon
    lineHeight: "20px",
    fontSize: "14px",
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    letterSpacing: "1.1px",
    width: "600px",
    // transition: theme.transitions.create("width"),
    // width: "auto",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

const Midnav = () => {
  return (
    <Box sx={main_div}>
      <Box sx={nav_logo}>
        <img
          width={"110px"}
          src="https://cdn.faire.com/static/logo.svg"
          alt="logo"
        />
      </Box>
      <Box sx={searchBar}>
        <Search
          sx={search}
        >
          <StyledInputBase
            placeholder="Search products or brands"
            inputProps={{ "aria-label": "search" }}
          />

          <SearchIcon sx={{ position: "absolute", right: 15,color:"grey" }} />
        </Search>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LanguageIcon sx={{ opacity: 0.5 }} />
        <MyMenu />
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box
        sx={blog}
      >
        <Typography variant="body2" sx={blog_space}>
          Blog
        </Typography>
        <Typography variant="body2" sx={blog_space}>
          Sell on Faire
        </Typography>
        <Typography variant="body2" sx={blog_space}>
          Sign In
        </Typography>
      </Box>
      <Box sx={{ width: "12%", margin: "auto" }}>
        <Typography
          variant="body1"
          sx={sign_up}
        >
          Sign Up to Shop
        </Typography>
      </Box>
    </Box>
  );
};

export default Midnav;
