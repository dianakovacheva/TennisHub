import { useEffect, useState, useContext } from "react";
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

import {
  Edit,
  Delete,
  PersonAdd,
  MeetingRoom,
  Event,
  AddCircle,
} from "@mui/icons-material";

import * as clubAPI from "../../API/clubAPI";

import ClubDetailsCardCSS from "./ClubDetailsCard.module.css";
import AuthContext from "../../contexts/AuthContext";

export default function ClubDetailsCard({
  isClubOwner,
  hasJoinedClub,
  requestRefreshHandler,
  club,
  courts,
}) {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  const { clubId } = useParams();

  if (!club) {
    return <div>Loading...</div>;
  }

  // Edit Club
  const editClubHandler = () => {
    navigate(`/club/${clubId}/edit`);
  };

  // Delete Club
  const deleteClubHandler = async () => {
    await clubAPI.deleteClub(clubId);
    console.log("Club deleted successfully!");
    navigate("/clubs");
  };

  // Join Club
  const joinClubHandler = async () => {
    const res = await clubAPI.joinClub(clubId);

    console.log("Club joined!");

    if (res.joinedClub.ok) requestRefreshHandler();
    navigate(`/club/${clubId}`);
  };

  // Leave Club
  const leaveClub = async () => {
    const res = await clubAPI.leaveClub(clubId);
    if (res) requestRefreshHandler();
    console.log("Club left successfully!");
    navigate(`/club/${clubId}`);
  };

  // Add Court
  const addCourtHandler = () => {
    navigate(`/club/${clubId}/add-court`);
  };

  // Book Court
  const bookCourtHandler = () => {
    navigate(`/club/${clubId}/book-court`);
  };

  return (
    <>
      <Card className={ClubDetailsCardCSS.detailsCardContainer}>
        <CardMedia
          className={ClubDetailsCardCSS.cardMedia}
          component="img"
          image={club.imageURL || "/images/placeholder-image.png"}
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
          {isClubOwner && (
            <>
              <Button
                size="small"
                variant="outlined"
                startIcon={<AddCircle />}
                onClick={addCourtHandler}
              >
                Add Court
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Edit />}
                onClick={editClubHandler}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Delete />}
                onClick={deleteClubHandler}
              >
                Delete
              </Button>
            </>
          )}
          {hasJoinedClub && club.courts.length > 0 && (
            <>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Event />}
                onClick={bookCourtHandler}
              >
                Book Court
              </Button>
            </>
          )}
          {!isClubOwner && hasJoinedClub && (
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<MeetingRoom />}
              onClick={leaveClub}
            >
              Leave Club
            </Button>
          )}
          {!hasJoinedClub && userId && (
            <Button
              size="small"
              variant="outlined"
              startIcon={<PersonAdd />}
              onClick={joinClubHandler}
            >
              Join Club
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
