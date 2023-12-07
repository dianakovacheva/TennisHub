import { Container, Typography } from "@mui/material";

import CourtsTable from "./courts-table/CourtsTable";

import CourtsListCSS from "./CourtsList.module.css";
import NoCourts from "../no-courts/NoCourts";

export default function CourtsList({
  isClubOwner,
  courts,
  requestRefreshHandler,
}) {
  return (
    <Container className={CourtsListCSS.courtsContainer}>
      <Typography className={CourtsListCSS.courtHeader}>
        Courts ({courts.length})
      </Typography>

      <CourtsTable
        isClubOwner={isClubOwner}
        courts={courts}
        requestRefreshHandler={requestRefreshHandler}
      />

      {courts.length === 0 && <NoCourts />}
    </Container>
  );
}
