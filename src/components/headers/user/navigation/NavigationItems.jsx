import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

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
