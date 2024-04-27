import React from "react";
import TopNav from "./TopNav/TopNav";
import Midnav from "./MidNav/Midnav";
import BottomNav from "./BottomNav/BottomNav";

const Navbar = () => {
  return (
    <div>
      <TopNav />
      <Midnav />
      <BottomNav />
    </div>
  );
};

export default Navbar;
