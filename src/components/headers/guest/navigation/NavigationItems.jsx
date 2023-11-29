import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EventIcon from "@mui/icons-material/Event";

import { Link } from "react-router-dom";

// import "./NavigationItems.css";

export default function NavigationItems() {
  return (
    <>
      <Link to={"/clubs"}>
        <ListItemButton>
          <ListItemText primary="Clubs" />
        </ListItemButton>
      </Link>
      <Link to={"/blog"}>
        <ListItemButton>
          <ListItemText primary="Blog" />
        </ListItemButton>
      </Link>
      <Link to={"/login"}>
        <ListItemButton>
          <ListItemText primary="Login" />
        </ListItemButton>
      </Link>
      <Link to={"/register"}>
        <ListItemButton>
          <ListItemText primary="Register" />
        </ListItemButton>
      </Link>
    </>
  );
}
