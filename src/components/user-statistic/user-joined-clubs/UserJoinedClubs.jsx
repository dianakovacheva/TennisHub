import { Box, Card, CardContent, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

import UserStatisticCSS from "../UserStatistic.module.css";

export default function UserJoinedClubs({ userData }) {
  return (
    <Card className={UserStatisticCSS.cardHolder}>
      <Box className={UserStatisticCSS.content}>
        <CardContent className={UserStatisticCSS.cardContentLeft}>
          <Typography component="div" variant="h3">
            {userData.userJoinedClubs ? (
              <>{userData.userJoinedClubs.length}</>
            ) : (
              0
            )}
          </Typography>
          <Typography color="text.secondary" component="p" variant="h6">
            Joined Clubs
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent className={UserStatisticCSS.cardContentRight}>
          <div>
            <GroupsIcon className={UserStatisticCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
