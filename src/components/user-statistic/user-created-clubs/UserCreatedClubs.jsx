import { Box, Card, CardContent, Typography } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import UserStatisticCSS from "../UserStatistic.module.css";

export default function UserCreatedClubs({ userData }) {
  return (
    <Card className={UserStatisticCSS.cardHolder}>
      <Box className={UserStatisticCSS.content}>
        <CardContent className={UserStatisticCSS.cardContentLeft}>
          <Typography component="div" variant="h3">
            {userData.userCreatedClubs ? (
              <>{userData.userCreatedClubs.length}</>
            ) : (
              0
            )}
          </Typography>
          <Typography color="text.secondary" component="p" variant="h6">
            Created Clubs
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent className={UserStatisticCSS.cardContentRight}>
          <div>
            <FactCheckIcon className={UserStatisticCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
