import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as userAPI from "../../API/userAPI";
import Endpoint from "../../endPoints";
import AuthContext from "../../contexts/AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    userAPI
      .logout()
      .then(() => {
        logoutHandler();
        navigate(Endpoint.Home);
      })
      .catch(() => navigate(Endpoint.Home));
  }, []);

  return null;
}
