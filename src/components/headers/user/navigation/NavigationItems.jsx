import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import {
  DashboardIcon,
  SportsTennisIcon,
  AddCircleIcon,
  EventIcon,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

import "./NavigationItems.css";

export default function NavigationItems() {
  return (
    <>
      <Link to={"/"}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to={"/clubs"}>
        <ListItemButton>
          <ListItemIcon>
            <SportsTennisIcon />
          </ListItemIcon>
          <ListItemText primary="Clubs" />
        </ListItemButton>
      </Link>
      <Link to={"/create-club"}>
        <ListItemButton>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Create Club" />
        </ListItemButton>
      </Link>
      <Link to={"/book-court"}>
        <ListItemButton>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Book Court" />
        </ListItemButton>
      </Link>
    </>
  );
}
