import { Link } from "react-router-dom";

import { Button, Stack, Container } from "@mui/material";
import { AddCircle, PersonAdd } from "@mui/icons-material";

import NewUserHomeCSS from "./NewUserHome.module.css";

export default function NewUserHome({ isNewUser }) {
  return (
    <>
      {isNewUser && (
        <Container component="div" className={NewUserHomeCSS.container}>
          <Stack className={NewUserHomeCSS.actionBtnsStack}>
            <Link to="/create-club">
              <Button
                variant="contained"
                size="large"
                startIcon={<AddCircle />}
              >
                Create Club
              </Button>
            </Link>
            <Link to="/clubs">
              <Button
                variant="contained"
                size="large"
                startIcon={<PersonAdd />}
              >
                Join Club
              </Button>
            </Link>
          </Stack>
        </Container>
      )}
    </>
  );
}
