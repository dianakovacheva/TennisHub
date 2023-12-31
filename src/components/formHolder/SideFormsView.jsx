import * as React from "react";
import { useContext } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormFooter from "./FormFooter";
import LoginForm from "../login/Login";
import RegisterForm from "../register/Register";
import AuthContext from "../../contexts/AuthContext";

export default function SideForms() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/images/tennis-sign-in-page.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {!isAuthenticated && <LoginForm />}
        {!isAuthenticated && <RegisterForm />}
        {/* <FormFooter /> */}
      </Grid>
    </Grid>
  );
}
