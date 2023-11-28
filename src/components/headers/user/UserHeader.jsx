import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

import UserHeaderCSS from "../user/UserHeader.module.css";
import NavigationItems from "./navigationItems";
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

const userNav = [
  { label: "Clubs", link: "/clubs" },
  {
    label: "Book Now",
    link: "/book-court",
  },
];

const dropdownMenu = ["Profile", "My Bookings", "Logout"];

export default function UserHeader({ children }) {
  const { isAuthenticated, firstName } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(true);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <h1 className={UserHeaderCSS.logo}>TennisHub</h1>

          {/* Start Avatar UserHeader */}
          <Box className={UserHeaderCSS.avatarContainer}>
            <Tooltip>
              <IconButton
                className={UserHeaderCSS.avatarIconButton}
                onClick={handleOpenUserMenu}
              >
                <Avatar alt={firstName} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id={UserHeaderCSS.menuAppbar}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {dropdownMenu.map((menuItem) => (
                <MenuItem key={menuItem} onClick={handleCloseUserMenu}>
                  <Typography className={UserHeaderCSS.menuItem}>
                    {menuItem}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* End Avatar UserHeader */}
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
