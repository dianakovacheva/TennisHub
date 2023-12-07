import { Link } from "react-router-dom";

import { Button, Stack, Box, Typography, Container } from "@mui/material";

export default function NewUserHome() {
  return (
    <Container component="div">
      <Stack>
        <Link to="/create-club">
          <Button variant="contained">Create Club</Button>
        </Link>
        <Link to="/clubs">
          <Button variant="contained">Join Club</Button>
        </Link>
      </Stack>
    </Container>
  );
}
