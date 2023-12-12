import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/AuthContext";
import GuestHome from "./guest/GuestHome";
import UserHome from "./user/UserHome";
import NewUserHome from "./new-user/NewUserHome";

import HomeWrapperCSS from "./HomeWrapper.module.css";

import * as userAPI from "../../API/userAPI";

export default function HomeWrapper() {
  const { isAuthenticated, userId } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    userCreatedClubs: [],
    userJoinedClubs: [],
  });

  useEffect(() => {
    try {
      userAPI.getUserById(userId).then((result) => {
        setUserData(result);
      });
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const userJoinedClubs = userData.userJoinedClubs;
  const userCreatedClubs = userData.userCreatedClubs;

  const isNewUser =
    isAuthenticated &&
    userJoinedClubs.length === 0 &&
    userCreatedClubs.length === 0;

  return (
    <div className={HomeWrapperCSS.homeWrapperContainer}>
      {isNewUser && <NewUserHome isNewUser={isNewUser} />}
      {isAuthenticated && <UserHome />}
      {!isAuthenticated && <GuestHome />}
    </div>
  );
}
