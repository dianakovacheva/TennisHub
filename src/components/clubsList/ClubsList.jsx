import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ClubsListItemCard from "./clubsListItem/ClubListItemCard";
import { getAllClubs } from "../../API/clubAPI";
import ClubsListCSS from "./ClubsList.module.css";

export default function ClubsList() {
  return (
    <>
      <Container className={ClubsListCSS.clubsListContainer} maxWidth="md">
        <Grid container spacing={4}>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
