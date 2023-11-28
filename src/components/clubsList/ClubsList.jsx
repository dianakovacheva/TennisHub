import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ClubsListItemCard from "./clubsListItem/ClubListItemCard";
import { getAllClubs } from "../../API/clubAPI";
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
