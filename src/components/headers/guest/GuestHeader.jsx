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

const pages = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Clubs",
    url: "/clubs",
  },
  {
    label: "Tennis News",
    url: "/news",
  },
  {
    label: "Login",
    url: "/login",
  },
  {
    label: "Register",
    url: "/register",
  },
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
            <Box className={GuestHeaderCSS.mobileMenuContainer}>
              <Link to="/" className={GuestHeaderCSS.mobileMenuLogo}>
                <Typography variant="h5" noWrap component="a" href="/">
                  TennisHub
                </Typography>
              </Link>
              <Box className={GuestHeaderCSS.mobileMenu}>
                <IconButton
                  className={GuestHeaderCSS.mobileMenuIcon}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {/* Navigation Items */}
                  {pages.map((page) => (
                    <MenuItem key={page.url}>
                      <Link to={`${page.url}`}>{page.label}</Link>
                    </MenuItem>
                  ))}

                  {/* Start Search */}
                  <Search />
                  {/* End Search */}
                </Menu>
              </Box>
            </Box>
            {/* End Mobile GuestHeader */}

            {/* Start GuestHeader Links */}
            <Box
              className={GuestHeaderCSS.navigationLinks}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {/* Navigation Items */}
              {pages.map((page) => (
                <MenuItem key={page.url}>
                  <Link to={`${page.url}`}>
                    <Button className={GuestHeaderCSS.menuButton}>
                      {page.label}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Box>
            {/* End GuestHeader Links */}

            {/* Start Search */}
            <Search className={GuestHeaderCSS.search} />
            {/* End Search */}
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
}
