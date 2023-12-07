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

  const hasJoinedClub = club.members?.includes(userId);

  // const bookCourt = async () => {

  //   const res = await bookingAPI.bookCourt(clubId)
  // };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Court Name</TableCell>
              <TableCell align="center">Surface</TableCell>
              <TableCell align="center">Indoor</TableCell>
              <TableCell align="center">Lighting</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
