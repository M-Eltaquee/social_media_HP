import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Search from "./Search";
import NavbarIcons from "./NavbarIcons";
import { Pets } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }} gap="20px">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Social
        </Typography>
        <Pets sx={{ display: { sm: "none" } }} />
        <Search />
        <NavbarIcons />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
