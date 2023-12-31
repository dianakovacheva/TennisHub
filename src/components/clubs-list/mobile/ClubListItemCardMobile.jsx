import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
      <img
        className={ClubListItemCardMobileCSS.clubImage}
        src={imageURL || "/images/placeholder-image.png"}
        alt={name}
        loading="lazy"
      />
      <CardHeader
        className={ClubListItemCardMobileCSS.cardHeader}
        title={name}
        subheader={address}
      />
      <CardActions className={ClubListItemCardMobileCSS.actionBtn}>
        <Link to={`/club/${_id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
