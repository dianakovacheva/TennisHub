import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import ClubListItemCardMobileCSS from "./ClubListItemCardMobile.module.css";

export default function ClubListItemCardMobile({
  _id,
  name,
  imageURL,
  summary,
  address,
}) {
  return (
    <Card className={ClubListItemCardMobileCSS.cardContainer}>
      <CardHeader
        className={ClubListItemCardMobileCSS.cardHeader}
        title={name}
        subheader={address}
      />
      <img
        className={ClubListItemCardMobileCSS.clubImage}
        src={`${imageURL}?w=164&h=164&fit=crop&auto=format`}
        alt={name}
        loading="lazy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        className={ClubListItemCardMobileCSS.actionBtn}
      >
        <Link to={`/club/${_id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
