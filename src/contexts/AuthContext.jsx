import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import * as userAPI from "../API/userAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useLocalStorage("user", {});

  // Login
  const loginSubmitHandler = async (values) => {
    const result = await userAPI.login(values.email, values.password);

    setAuth(result);

    navigate("/");
  };

  // Register
  const registerSubmitHandler = async (values) => {
    const result = await userAPI.register(
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
    username: (auth.firstName && auth.lastName) || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
