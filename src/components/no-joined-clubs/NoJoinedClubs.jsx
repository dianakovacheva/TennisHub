import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

import { AddCircle, PersonAdd } from "@mui/icons-material";

import NoJoinedClubsCSS from "./NoJoinedClubs.module.css";

export default function NoJoinedClubs() {
  return (
    <Card className={NoJoinedClubsCSS.cardContainer}>
      <CardContent className={NoJoinedClubsCSS.cardContent}>
        <Typography className={NoJoinedClubsCSS.text}>
          No joined clubs yet
        </Typography>
      </CardContent>
      <CardActions className={NoJoinedClubsCSS.cardActionsContainer}>
        <Stack className={NoJoinedClubsCSS.actionBtnsStack}>
          <Link to="/create-club">
            <Button variant="contained" size="large" startIcon={<AddCircle />}>
              Create Club
            </Button>
          </Link>
          <Link to="/clubs">
            <Button variant="contained" size="large" startIcon={<PersonAdd />}>
              Join Club
            </Button>
          </Link>
        </Stack>
      </CardActions>
    </Card>
  );
}
