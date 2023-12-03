import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Divider,
  Stack,
} from "@mui/material";

import { Edit, Delete, Comment } from "@mui/icons-material";

import * as ClubAPI from "../../API/clubAPI";

import ClubDetailsCardCSS from "./ClubDetailsCard.module.css";

export default function ClubDetailsCard() {
  const navigate = useNavigate();
  const [club, setClub] = useState({});
  const { clubId } = useParams();

  useEffect(() => {
    ClubAPI.getClubById(clubId).then(setClub);
  }, [clubId]);

  if (!club) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card className={ClubDetailsCardCSS.detailsCardContainer}>
        <CardMedia
          className={ClubDetailsCardCSS.cardMedia}
          component="img"
          image={club.imageURL}
          alt={club.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {club.name}
          </Typography>
          <Typography color="text.secondary">{club.address}</Typography>
          <Typography color="text.secondary">
            Phone: {club.phoneNumber}
          </Typography>

          {Object.keys(club).length && (
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Typography color="text.secondary">
                Club Manager:{" "}
                {`${club.manager[0].firstName} ${club.manager[0].lastName}`}
              </Typography>

              <Typography color="text.secondary">
                Members: {club.members.length}
              </Typography>
              <Typography color="text.secondary">
                Courts: {club.courts.length}
              </Typography>
            </Stack>
          )}
          <Typography
            className={ClubDetailsCardCSS.clubSummary}
            variant="body2"
            color="text.secondary"
          >
            {club.summary}
          </Typography>
        </CardContent>
        <CardActions className={ClubDetailsCardCSS.cardActions}>
          <Button size="small" variant="outlined" startIcon={<Edit />}>
            Edit
          </Button>
          <Button size="small" variant="outlined" startIcon={<Delete />}>
            Delete
          </Button>
          <Button size="small" variant="outlined" startIcon={<Comment />}>
            Comment
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
