import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import GuestHome from "./guest/GuestHome";
import UserHome from "./user/UserHome";
import NewUserHome from "./new-user/NewUserHome";

import HomeWrapperCSS from "./HomeWrapper.module.css";

export default function HomeWrapper() {
  const { isAuthenticated, userJoinedClubs, userCreatedClubs } =
    useContext(AuthContext);

  const isNewUser =
    isAuthenticated &&
    userJoinedClubs.length === 0 &&
    userCreatedClubs.length === 0;

  return (
    <div className={HomeWrapperCSS.homeWrapperContainer}>
      {isNewUser && <NewUserHome />}
      {isAuthenticated && <UserHome />}
      {!isAuthenticated && <GuestHome />}
    </div>
  );
}
