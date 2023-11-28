import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { getAllClubs } from "../../API/clubAPI";
import ClubsListItemCard from "./clubsListItem/ClubsListItemCard";
import ClubsListCSS from "./ClubsList.module.css";

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
      <Container className={ClubsListCSS.clubsListContainer} maxWidth="md">
        <Grid container spacing={4}>
          {clubs.map((club) => (
            <Grid item key={club._id}>
              <ClubsListItemCard key={club._id} {...club} />

              {clubs.length === 0 && (
                <h3 className={ClubsListCSS.notClubs}>No clubs yet</h3>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
