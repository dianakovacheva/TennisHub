import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";

import { Edit, Event } from "@mui/icons-material";

import { useState, useEffect, useContext } from "react";

import * as clubAPI from "../../../API/clubAPI";
import CourtItemCardCSS from "./CourtItemCard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

export default function CourtItemCard(courtObject) {
  const { userId } = useContext(AuthContext);
  const { clubId } = useParams();
  const [club, setClub] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    clubAPI.getClubById(clubId).then(setClub);
  }, [clubId]);

  console.log({ ...courtObject });

  const hasJoinedClub = club.members?.includes(userId);

  // const bookCourt = async () => {

  //   const res = await bookingAPI.bookCourt(clubId)
  // };

  return (
    <>
      <Card className={CourtItemCardCSS.courtContainer}>
        <CardContent>
          <div className={CourtItemCardCSS.courtDataContainer}>
            <Stack className={CourtItemCardCSS.courtInfo}>
              <Typography className={CourtItemCardCSS.courtAuthor}>
                {`${courtObject.courtObject.courtName}`}
              </Typography>
            </Stack>
          </div>
        </CardContent>
        <CardActions className={CourtItemCardCSS.cardActions}>
          {hasJoinedClub && (
            <>
              <Button size="small" variant="outlined" startIcon={<Event />}>
                Book Court
              </Button>
              <Button size="small" variant="outlined" startIcon={<Edit />}>
                Edit
              </Button>
              {/* <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<MeetingRoom />}
                onClick={leaveClub}
              >
                Leave Club
              </Button> */}
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
}
