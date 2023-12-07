import { Card, CardContent, Typography } from "@mui/material";

import NoCourtsCSS from "./NoCourts.module.css";

export default function NoCourts() {
  return (
    <Card className={NoCourtsCSS.cardContainer}>
      <CardContent className={NoCourtsCSS.cardContent}>
        <Typography className={NoCourtsCSS.text}>No courts yet</Typography>
      </CardContent>
    </Card>
  );
}
