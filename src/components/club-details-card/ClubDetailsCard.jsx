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
  AddCircle,
} from "@mui/icons-material";

import * as clubAPI from "../../API/clubAPI";
import * as bookingAPI from "../../API/bookingAPI";

import ClubDetailsCardCSS from "./ClubDetailsCard.module.css";
import AuthContext from "../../contexts/AuthContext";

export default function ClubDetailsCard() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [club, setClub] = useState({});
  const [refreshData, setRefreshData] = useState(false);
  const { clubId } = useParams();

  useEffect(() => {
    clubAPI.getClubById(clubId).then(setClub);
  }, [clubId, refreshData]);

  if (!club) {
    return <div>Loading...</div>;
  }

  const isClubOwner = userId === club.manager?.find(() => true)._id;
  const hasJoinedClub = club.members?.includes(userId);

  const editClubHandler = () => {
    navigate(`/club/${clubId}/edit`);
  };

  const addCourtHandler = () => {
    navigate(`/club/${clubId}/add-court`);
  };

  const deleteClubHandler = async () => {
    await clubAPI.deleteClub(clubId);
    console.log("Club deleted successfully!");
    navigate("/clubs");
  };

  const joinClubHandler = async () => {
    const res = await clubAPI.joinClub(clubId);

    console.log("Club joined!");

    if (res.joinedClub.ok) setRefreshData((status) => !status);
    navigate(`/club/${clubId}`);
  };

  const leaveClub = async () => {
    const res = await clubAPI.leaveClub(clubId);
    if (res) setRefreshData((status) => !status);
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
                startIcon={<Delete />}
                onClick={deleteClubHandler}
              >
                Delete
              </Button>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Edit />}
                onClick={editClubHandler}
              >
                Edit
              </Button>
            </>
          )}
          {hasJoinedClub && (
            <>
              <Button size="small" variant="outlined" startIcon={<Event />}>
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
