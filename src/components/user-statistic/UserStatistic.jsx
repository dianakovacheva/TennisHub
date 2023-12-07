import UserBookings from "./user-bookings/UserBookings";
import UserCreatedClubs from "./user-created-clubs/UserCreatedClubs";
import UserJoinedClubs from "./user-joined-clubs/UserJoinedClubs";

import UserStatisticCSS from "./UserStatistic.module.css";

export default function UserStatistic({ userData }) {
  return (
    <div className={UserStatisticCSS.statisticCardsContainer}>
      <UserJoinedClubs userData={userData} />
      <UserCreatedClubs userData={userData} />
      <UserBookings userData={userData} />
    </div>
  );
}
