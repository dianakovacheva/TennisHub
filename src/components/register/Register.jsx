import React, { useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

import { Link } from "react-router-dom";

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
    <Grid
      className={RegisterFormCSS.registerFormGrid}
      container
      component="main"
    >
      <Grid
        className={RegisterFormCSS.registerPageLeftSide}
        item
        xs={false}
        sm={4}
        md={7}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box className={RegisterFormCSS.registerFormBox}>
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
              className={RegisterFormCSS.submitBtn}
              type="submit"
              fullWidth
              variant="contained"
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  to="/login"
                  className={RegisterFormCSS.link}
                  variant="body2"
                >
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
