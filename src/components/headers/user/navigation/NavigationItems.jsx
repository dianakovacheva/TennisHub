import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListSubheader from "@mui/material/ListSubheader";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EventIcon from "@mui/icons-material/Event";

import { Link } from "react-router-dom";

import "./NavigationItems.css";
import { Person } from "@mui/icons-material";

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
      <Link to={"/account"}>
        <ListItemButton>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItemButton>
      </Link>
    </>
  );
}

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
//)
