import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";

import { getAllClubs } from "../../API/clubAPI";
import ClubsListItemCard from "./desktop/ClubListItemCardDesktop";
import ClubsListCSS from "./ClubsList.module.css";
import ClubListItemCardMobile from "./mobile/ClubListItemCardMobile";

export default function ClubsList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getAllClubs()
      .then((result) => setClubs(result))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* Start Desktop Version */}
      <Container
        className={ClubsListCSS.desktopClubsListContainer}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {clubs.map((club) => (
            <Grid item key={club._id}>
              {/* Clubs List Item Card */}
              <ClubsListItemCard key={club._id} {...club} />

              {clubs.length === 0 && (
                <h3 className={ClubsListCSS.notClubs}>No clubs yet</h3>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Desktop Version */}

      {/* Start Mobile Version */}
      <Container
        className={ClubsListCSS.mobileClubsListContainer}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {clubs.map((club) => (
            <Grid item key={club._id}>
              {/* Clubs List Item Card */}
              <ClubListItemCardMobile key={club._id} {...club} />

              {clubs.length === 0 && (
                <h3 className={ClubsListCSS.notClubs}>No clubs yet</h3>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Mobile Version */}
    </>
  );
}
