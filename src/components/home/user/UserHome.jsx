import { useContext, useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { getUserById } from "../../../API/userAPI";
import AuthContext from "../../../contexts/AuthContext";
import UserStatistic from "../../user-statistic/UserStatistic";

import UserHomeCSS from "../user/UserHome.module.css";

export default function UserHome() {
  const { userId } = useContext(AuthContext);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserById(userId)
      .then((result) => setUserData(result))
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <Box className={UserHomeCSS.statisticCardsSection}>
      <UserStatistic userData={userData} />
    </Box>
  );
}
