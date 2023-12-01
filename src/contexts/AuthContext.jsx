import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import * as authAPI from "../API/authAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useLocalStorage("user", {});

  // Login
  const loginSubmitHandler = async (values) => {
    const result = await authAPI.login(values.email, values.password);

    setAuth(result);

    navigate("/");
  };

  // Register
  const registerSubmitHandler = async (values) => {
    const result = await authAPI.register(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );

    setAuth(result);

    navigate("/");
  };

  // Logout
  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem("user");

    navigate("/");
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
