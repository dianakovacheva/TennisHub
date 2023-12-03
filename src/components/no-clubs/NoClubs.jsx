import { Card, CardContent, Typography } from "@mui/material";

import NoClubsCSS from "./NoClubs.module.css";

export default function NoClubs() {
  return (
    <Card className={NoClubsCSS.cardContainer}>
      <CardContent className={NoClubsCSS.cardContent}>
        <Typography className={NoClubsCSS.text}>No clubs yet</Typography>
      </CardContent>
    </Card>
  );
}
