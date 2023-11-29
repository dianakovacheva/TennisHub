import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Button, MenuItem } from "@mui/material";

import { Link } from "react-router-dom";

import Search from "../../search/Search";
import GuestHeaderCSS from "./GuestHeader.module.css";

];

export default function GuestHeader({ children }) {

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Start App Logo */}
            {/* End App Logo */}

            {/* Start Mobile GuestHeader */}
            </Box>
            {/* End Mobile GuestHeader */}

            {/* Start GuestHeader Links */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
              ))}
            </Box>
            {/* End GuestHeader Links */}

            {/* Start Search */}
            {/* End Search */}
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
}
