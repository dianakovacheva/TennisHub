import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import GuestHome from "./guest/GuestHome";
import UserHome from "./user/UserHome";

export default function HomeWrapper() {
  const { isAuthenticated, userJoinedClubs } = useContext(AuthContext);

  const isNewUser = isAuthenticated && userJoinedClubs.length === 0;

  return (
    <>
      {isNewUser && <p>New User Home</p>}
      {isAuthenticated && <UserHome />}
      {!isAuthenticated && <GuestHome />}
    </>
  );
}
