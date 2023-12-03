import React, { useContext, useState } from "react";

import {
  InputAdornment,
  Avatar,
  Paper,
  Button,
  TextField,
  Box,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Visibility, VisibilityOff } from "@mui/icons-material";

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
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

  const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
  const handleMouseDownPassword2 = () => setShowPassword2(!showPassword2);

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
                  id="password"
                  autoComplete="new-password"
                  type={showPassword1 ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword1}
                        >
                          {showPassword1 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
                  id="repeatPassword"
                  autoComplete="new-password"
                  type={showPassword2 ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                        >
                          {showPassword2 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
