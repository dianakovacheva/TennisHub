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
  FormControl,
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

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

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

          {/* Start register form */}
          <FormControl
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
                  helperText={
                    values[RegisterFormKeys.FirstName].length === 0
                      ? "You must enter a value."
                      : "" || values[RegisterFormKeys.FirstName].length < 2
                      ? "The first name must be at least 2 characters long."
                      : ""
                  }
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
                  helperText={
                    values[RegisterFormKeys.LastName].length === 0
                      ? "You must enter a value."
                      : "" || values[RegisterFormKeys.LastName].length < 2
                      ? "The last name must be at least 2 characters long."
                      : ""
                  }
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
                  type="email"
                  placeholder="john.doe@email.com"
                  helperText={
                    (values[RegisterFormKeys.Email].length === 0
                      ? "You must enter a value."
                      : "") ||
                    (!values[RegisterFormKeys.Email].match(emailRegExp)
                      ? "Not a valid email."
                      : "")
                  }
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
                  helperText={
                    (values[RegisterFormKeys.Password].length === 0
                      ? "You must enter a value."
                      : "") ||
                    (values[RegisterFormKeys.Password].length < 8
                      ? "Password must be at least 8 characters."
                      : "")
                  }
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
                  helperText={
                    (values[RegisterFormKeys.RepeatPassword].length === 0
                      ? "You must enter a value."
                      : "") ||
                    (values[RegisterFormKeys.RepeatPassword].length < 8
                      ? "Repeat password must be at least 8 characters."
                      : "")
                  }
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
          </FormControl>
          {/* End register form */}
        </Box>
      </Grid>
    </Grid>
  );
}
