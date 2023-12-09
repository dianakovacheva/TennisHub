import { useState, useContext } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

import AuthContext from "../../../../contexts/AuthContext";

import DropdownMenuCSS from "./DropdownMenu.module.css";

const dropdownMenu = [
  // {
  //   label: "Account",
  //   url: "/account",
  // },
  {
    label: "Logout",
    url: "/logout",
  },
];

export default function DropdownMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { firstName, lastName, email } = useContext(AuthContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box className={DropdownMenuCSS.avatarContainer}>
        <Tooltip>
          <IconButton
            className={DropdownMenuCSS.avatarIconButton}
            onClick={handleOpenUserMenu}
          >
            <Avatar
              className={DropdownMenuCSS.avatar}
            >{`${firstName[0]}${lastName[0]}`}</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          id={DropdownMenuCSS.menuAppbar}
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
          <Box className={DropdownMenuCSS.userData}>
            <Typography className={DropdownMenuCSS.userName}>
              {firstName} {lastName}
            </Typography>
            <Typography className={DropdownMenuCSS.email}>{email}</Typography>
          </Box>
          <Divider />
          {dropdownMenu.map((menuItem) => (
            <Link key={menuItem.url} to={`${menuItem.url}`}>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography className={DropdownMenuCSS.menuItem}>
                  {menuItem.label}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
    </>
  );
}
