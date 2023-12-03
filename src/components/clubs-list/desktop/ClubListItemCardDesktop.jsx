import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import ClubListItemCardDesktopCSS from "./ClubListItemCardDesktop.module.css";

export default function ClubsListItemCard({
  _id,
  name,
  imageURL,
  summary,
  address,
}) {
  return (
    <Card className={ClubListItemCardDesktopCSS.cardContainer}>
      <Box className={ClubListItemCardDesktopCSS.cardBox}>
        <img
          className={ClubListItemCardDesktopCSS.clubImage}
          src={imageURL || "/images/placeholder-image.png"}
          alt={name}
          loading="lazy"
          //
        />
        <CardContent className={ClubListItemCardDesktopCSS.cardContent}>
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
            className={ClubListItemCardDesktopCSS.clubSummary}
            variant="body2"
            color="text.secondary"
            component="div"
          >
            {summary}
          </Typography>
          <CardActions className={ClubListItemCardDesktopCSS.actionBtn}>
            <Link to={`/club/${_id}`}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}
