import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthContext";

import LoginFormCSS from "./LoginForm.module.css";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function LoginForm() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <Box
        onSubmit={onSubmit}
        className={LoginFormCSS.loginFormContainer}
        component="form"
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          label="Email Address"
          name={LoginFormKeys.Email}
          placeholder="john-doe@gmail.com"
          onChange={onChange}
          value={values[LoginFormKeys.Email]}
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name={LoginFormKeys.Password}
          label="Password"
          type="password"
          id="password"
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
          autoComplete="new-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
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
      </Box>
    </Box>
  );
}
