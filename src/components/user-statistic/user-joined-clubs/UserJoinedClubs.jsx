// import { useContext } from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

import UserJoinedClubsCSS from "./UserJoinedClubs.module.css";
// import AuthContext from "../../../contexts/AuthContext";

export default function UserJoinedClubs({ userData }) {
  //   const { userJoinedClubs } = useContext(AuthContext);

  return (
    <Card className={UserJoinedClubsCSS.cardHolder}>
      <Box>
        <CardContent className={UserJoinedClubsCSS.cardContentLeft}>
          <Typography component="div" variant="h3">
            {userData.userJoinedClubs ? (
              <>{userData.userJoinedClubs.length}</>
            ) : (
              0
            )}
            {/* {userJoinedClubs.length} */}
          </Typography>
          <Typography color="text.secondary" component="p" variant="h6">
            Joined Clubs
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent className={UserJoinedClubsCSS.cardContentRight}>
          <div>
            <GroupsIcon className={UserJoinedClubsCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
