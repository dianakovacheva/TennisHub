import { Box, Card, CardContent, Typography } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import UserCreatedClubsCSS from "./UserCreatedClubs.module.css";

export default function UserCreatedClubs({ userData }) {
  return (
    <Card className={UserCreatedClubsCSS.cardHolder}>
      <Box>
        <CardContent className={UserCreatedClubsCSS.cardContentLeft}>
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
        <CardContent className={UserCreatedClubsCSS.cardContentRight}>
          <div>
            <FactCheckIcon className={UserCreatedClubsCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
