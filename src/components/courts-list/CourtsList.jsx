import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Typography } from "@mui/material";

import * as clubAPI from "../../API/clubAPI";
import CourtItemCard from "./court-item-card/CourtItemCard";

import CourtsListCSS from "./CourtsList.module.css";

export default function CourtsList() {
  const [courts, setCourts] = useState([]);
  const { clubId } = useParams();

  useEffect(() => {
    clubAPI
      .getClubCourts(clubId)
      .then((result) => setCourts(result))
      .catch((error) => {
        console.log(error);
      });
  }, [clubId]);

  return (
    <Container className={CourtsListCSS.courtsContainer}>
      <Typography className={CourtsListCSS.courtHeader}>
        Courts ({courts.length})
      </Typography>

      {courts.map((courtObject) => (
        <CourtItemCard key={courtObject._id} courtObject={courtObject} />
      ))}

      {/* {courts.length === 0 && <Nocourts />} */}
    </Container>
  );
}
