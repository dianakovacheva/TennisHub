import { useState, useContext } from "react";

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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthContext";
import LoginCSS from "../login/Login.module.css";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Grid className={LoginCSS.loginFormGrid} container component="main">
      <Grid
        className={LoginCSS.loginPageLeftSide}
        item
        xs={false}
        sm={4}
        md={7}
      />
      <Grid
        className={LoginCSS.loginPageRightSide}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          className={LoginCSS.loginFormBox}
          sx={{
            my: 8,
            mx: 4,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>

          {/* Start Login Form */}
          <FormControl
            onSubmit={onSubmit}
            className={LoginCSS.loginFormContainer}
            component="form"
            sx={{ mt: 1 }}
          >
            {/* Email Input Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              aria-label="Email field"
              placeholder="john.doe@gmail.com"
              onChange={onChange}
              name={LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              helperText={
                (values[LoginFormKeys.Email].length === 0
                  ? "You must enter a value."
                  : "") ||
                (!values[LoginFormKeys.Email].match(emailRegExp)
                  ? "Not a valid email."
                  : "")
              }
              autoComplete="email"
              autoFocus
            />

            {/* Password Input Field */}
            <TextField
              label="Password"
              aria-label="Password field"
              variant="outlined"
              margin="normal"
              id="password"
              required
              fullWidth
              autoFocus
              autoComplete="new-password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              helperText={
                (values[LoginFormKeys.Password].length === 0
                  ? "You must enter a value."
                  : "") ||
                (values[LoginFormKeys.Password].length < 8
                  ? "Password must be at least 8 characters."
                  : "")
              }
              type={showPassword ? "text" : "password"}
              onChange={onChange}
              InputProps={{
                // This is where the toggle button is added
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              className={LoginCSS.submitBtn}
              type="submit"
              fullWidth
              variant="contained"
              // sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </FormControl>
          {/* End Login Form */}
        </Box>
      </Grid>
    </Grid>
  );
}
