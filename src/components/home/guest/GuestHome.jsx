import { React } from "react";

import { Link } from "react-router-dom";

import { Button, Stack, Box, Typography, Container } from "@mui/material";

import GuestHomeCSS from "./GuestHome.module.css";
import ClubsList from "../../clubs-list/ClubsList";

export default function GuestHome() {
  return (
    <>
      {/* Start Hero Section */}
      <Box
        className={GuestHomeCSS.heroSection}
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Ready to Serve Up Some Fun?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Looking to step up your tennis game? Look no further! Our
            state-of-the-art tennis court booking app is your ace in the hole
            for the ultimate playing experience.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link to="/register">
              <Button variant="contained">Register</Button>
            </Link>
            <Link to="/login">
              <Button variant="outlined">Login</Button>
            </Link>
          </Stack>
        </Container>
      </Box>
      {/* End Hero Section */}

      {/* Start Clubs Gallery */}
      <ClubsList />
      {/* End Clubs Gallery */}
    </>
  );
}
