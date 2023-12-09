import { useContext } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import AuthContext from "../../contexts/AuthContext";
import ClubsList from "../clubs-list/ClubsList";

import ClubGalleryCSS from "./ClubGallery.module.css";

export default function ClubGallery() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {/* Start Hero Section */}

      {!isAuthenticated && (
        <Box className={ClubGalleryCSS.heroSection}>
          <Container maxWidth="sm">
            <Typography
              className={ClubGalleryCSS.callToActionText}
              color="text.secondary"
              paragraph
            >
              Explore our curated collection of premier clubs tailored for every
              player. Time to dive into a world where passion meets play – book
              now and let the games begin!
            </Typography>
          </Container>
        </Box>
      )}
      {/* End Hero Section */}

      {/* Clubs List */}
      <ClubsList />
    </>
  );
}
