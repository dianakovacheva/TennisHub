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
  Comment,
  PersonAdd,
  MeetingRoom,
  Event,
} from "@mui/icons-material";

import * as ClubAPI from "../../API/clubAPI";

import ClubDetailsCardCSS from "./ClubDetailsCard.module.css";
import AuthContext from "../../contexts/AuthContext";

export default function ClubDetailsCard() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [club, setClub] = useState({});
  const { clubId } = useParams();

  useEffect(() => {
    ClubAPI.getClubById(clubId).then(setClub);
  }, [clubId]);

  if (!club) {
    return <div>Loading...</div>;
  }

  const isClubOwner = userId === club.manager?.find(() => true)._id;
  const hasJoinedClub = club.members?.includes(userId);

  const deleteClubHandler = async () => {
    await ClubAPI.deleteClub(clubId);

    navigate("/clubs");
  };

  const joinClubHandler = async () => {
    await ClubAPI.joinClub(clubId);
    console.log("Club joined!");
    navigate(`/club/${clubId}`);
  };

  const leaveClub = async () => {
    await ClubAPI.leaveClub(clubId);

    console.log("Club left successfully!");
    navigate(`/club/${clubId}`);
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
          {userId && (
            <Button size="small" variant="outlined" startIcon={<Comment />}>
              Comment
            </Button>
          )}

          {isClubOwner && (
            <>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Delete />}
                onClick={deleteClubHandler}
              >
                Delete
              </Button>
              <Button size="small" variant="outlined" startIcon={<Edit />}>
                Edit
              </Button>
            </>
          )}
          {hasJoinedClub && (
            <>
              <Button size="small" variant="outlined" startIcon={<Event />}>
                Book Court
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<MeetingRoom />}
                onClick={leaveClub}
              >
                Leave Club
              </Button>
            </>
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
