import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import ClubGalleryCSS from "./ClubGallery.module.css";
import ClubsList from "../clubsList/ClubsList";

export default function ClubGallery() {
  return (
    <>
      {/* Start Hero Section */}
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
      {/* End Hero Section */}
      <ClubsList />
    </>
  );
}
