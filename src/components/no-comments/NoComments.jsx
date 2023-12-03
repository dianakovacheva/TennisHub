import { Card, CardContent, Typography } from "@mui/material";

import NoCommentsCSS from "./NoComments.module.css";

export default function NoComments() {
  return (
    <Card className={NoCommentsCSS.cardContainer}>
      <CardContent className={NoCommentsCSS.cardContent}>
        <Typography className={NoCommentsCSS.text}>No comments yet</Typography>
      </CardContent>
    </Card>
  );
}
