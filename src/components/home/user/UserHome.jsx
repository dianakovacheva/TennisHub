import { useContext, useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { getUserById } from "../../../API/userAPI";
import AuthContext from "../../../contexts/AuthContext";

import UserJoinedClubs from "../../user-statistic/user-joined-clubs/UserJoinedClubs";

import UserHomeCSS from "../user/UserHome.module.css";
import UserCreatedClubs from "../../user-statistic/user-created-clubs/UserCreatedClubs";
import UserBookings from "../../user-statistic/user-bookings/UserBookings";

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

  const newUser =
    userData.userCreatedClubs !== undefined &&
    userData.userCreatedClubs.length === 0 &&
    userData.userJoinedClubs !== undefined &&
    userData.userJoinedClubs.length === 0;

  return (
    <Box className={UserHomeCSS.statisticCardsSection}>
      {!newUser && (
        <>
          <UserJoinedClubs userData={userData} />
          <UserCreatedClubs userData={userData} />
          <UserBookings userData={userData} />
        </>
      )}
    </Box>
  );
}
