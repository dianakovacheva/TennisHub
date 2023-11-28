import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import ClubsListItemCardCSS from "./ClubsListItemCard.module.css";

export default function ClubsListItemCard({
  _id,
  name,
  imageURL,
  summary,
  address,
}) {
  return (
    <Card className={ClubsListItemCardCSS.cardContainer}>
      <Box className={ClubsListItemCardCSS.cardBox}>
        <img
          className={ClubsListItemCardCSS.clubImage}
          src={`${imageURL}?w=164&h=164&fit=crop&auto=format`}
          alt={name}
          loading="lazy"
        />
        <CardContent className={ClubsListItemCardCSS.cardContent}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {address}
          </Typography>
          <Typography
            className={ClubsListItemCardCSS.clubSummary}
            variant="body2"
            color="text.secondary"
            component="div"
          >
            {summary}
          </Typography>
          <CardActions className={ClubsListItemCardCSS.actionBtn}>
            <Link to={`/club/${_id}`}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}
