import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ClubsListItem from "./clubsListItem/ClubsListItem";

import ClubsListCSS from "./ClubsList.module.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ClubsList() {
  return (
    <>
      <Container
        className={ClubsListCSS.clubsListContainer}
        sx={{ py: 8 }}
        maxWidth="md"
      >
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <ClubsListItem />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
