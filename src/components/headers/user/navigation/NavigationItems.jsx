import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { Dashboard, SportsTennis, AddCircle, Event } from "@mui/icons-material";

import { Link } from "react-router-dom";

import "./NavigationItems.css";

export default function NavigationItems() {
  return (
    <>
      <Link to={"/"}>
        <ListItemButton>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to={"/clubs"}>
        <ListItemButton>
          <ListItemIcon>
            <SportsTennis />
          </ListItemIcon>
          <ListItemText primary="Clubs" />
        </ListItemButton>
      </Link>
      <Link to={"/create-club"}>
        <ListItemButton>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText primary="Create Club" />
        </ListItemButton>
      </Link>
      <Link to={"/book-court"}>
        <ListItemButton>
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Book Court" />
        </ListItemButton>
      </Link>
    </>
  );
}
