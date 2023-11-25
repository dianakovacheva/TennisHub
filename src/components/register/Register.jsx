import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

import RegisterFormCSS from "./Register.module.css";

const RegisterFormKeys = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Password: "password",
  RepeatPassword: "repeatPassword",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.FirstName]: "",
    [RegisterFormKeys.LastName]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.RepeatPassword]: "",
  });

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
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            onSubmit={onSubmit}
            className={RegisterFormCSS.registerFormContainer}
            component="form"
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name={RegisterFormKeys.FirstName}
                  onChange={onChange}
                  value={values[RegisterFormKeys.FirstName]}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name={RegisterFormKeys.LastName}
                  onChange={onChange}
                  value={values[RegisterFormKeys.LastName]}
                  autoComplete="family-name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name={RegisterFormKeys.Email}
                  onChange={onChange}
                  value={values[RegisterFormKeys.Email]}
                  autoComplete="email"
                  type="text"
                  placeholder="john-doe@email.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name={RegisterFormKeys.Password}
                  onChange={onChange}
                  value={values[RegisterFormKeys.Password]}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name={RegisterFormKeys.RepeatPassword}
                  onChange={onChange}
                  value={values[RegisterFormKeys.RepeatPassword]}
                  label="Repeat Password"
                  type="password"
                  id="repeatPassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
