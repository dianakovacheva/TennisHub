import React, { useState, useContext } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { Link } from "react-router-dom";

import NavigationItems from "./navigation/NavigationItems";
import DropdownMenu from "./dropdownMenu/DropdownMenu";

import UserHeaderCSS from "../user/UserHeader.module.css";

// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { mainListItems, secondaryListItems } from "./listItems";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function UserHeader({ children }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box className={UserHeaderCSS.navigationContainer}>
      {/* Start Navigation Bar */}
      <AppBar className={UserHeaderCSS.navigationBar} open={open}>
        <Toolbar className={UserHeaderCSS.navigationToolbar}>
          <IconButton
            className={UserHeaderCSS.burgerMenuIcon}
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={UserHeaderCSS.logo}>
            <Link to="/">TennisHub</Link>
          </h1>
          {/* Dropdown Menu */}
          <DropdownMenu />
        </Toolbar>
      </AppBar>
      {/* End Navigation Bar */}

      {/* Start Side Menu */}
      <Drawer variant="permanent" open={open}>
        <Toolbar
          className={UserHeaderCSS.sideMenuToolbar}
          sx={{
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {/* Drawer Navigation Items */}
          <NavigationItems />

          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </List>
      </Drawer>
      {/* End Side Menu */}

      {/* Start Main */}
      <Box className={UserHeaderCSS.mainContainer} component="main">
        {children} {/* Routes */}
      </Box>
      {/* End Main */}
    </Box>
  );
}
