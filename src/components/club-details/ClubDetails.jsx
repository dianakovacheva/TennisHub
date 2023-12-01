import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
import AddComment from "../add-comment/AddComment";

import ClubDetailsCSS from "./ClubDetails.module.css";
import CommentsList from "../comments-list/CommentsList";

export default function ClubDetails() {
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
      <Card className={ClubDetailsCSS.detailsCardContainer}>
        <CardMedia
          className={ClubDetailsCSS.cardMedia}
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
            className={ClubDetailsCSS.clubSummary}
            variant="body2"
            color="text.secondary"
          >
            {club.summary}
          </Typography>
        </CardContent>
        <CardActions className={ClubDetailsCSS.cardActions}>
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
      <Divider className={ClubDetailsCSS.divider} variant="middle" />

      <AddComment />
      <CommentsList />
    </>
  );
}
