import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import * as authAPI from "../API/authAPI";

import { useSnackbar } from "./SnackbarContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { openSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const [auth, setAuth] = useLocalStorage("user", {});

  // Login
  const loginSubmitHandler = async (values) => {
    try {
      const result = await authAPI.login(values.email, values.password);
      setAuth(result);

      openSnackbar(`Hello, ${result.firstName}!`, "success");
      navigate("/");
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  // Register
  const registerSubmitHandler = async (values) => {
    try {
      const result = await authAPI.register(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      );

      setAuth(result);
      openSnackbar(`Hello, ${result.firstName}!`, "success");
      navigate("/");
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  // Logout
  const logoutHandler = async () => {
    try {
      const result = await authAPI.logout();
      setAuth(result);

      localStorage.removeItem("user");

      openSnackbar("Bye bye...", "info");
      navigate("/");
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    firstName: auth.firstName,
    lastName: auth.lastName,
    email: auth.email,
    userId: auth._id,
    userJoinedClubs: auth.userJoinedClubs,
    userCreatedClubs: auth.userCreatedClubs,
    isAuthenticated: !!auth._id,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
