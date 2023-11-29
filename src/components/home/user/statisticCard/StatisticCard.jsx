import { useContext } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";

import AuthContext from "../../../../contexts/AuthContext";
import StatisticCardCSS from "./StatisticCard.module.css";

export default function StatisticCard() {
  const { userJoinedClubs } = useContext(AuthContext);

  return (
    <Card className={StatisticCardCSS.cardHolder}>
      <Box>
        <CardContent className={StatisticCardCSS.cardContentLeft}>
          <Typography component="div" variant="h3">
            {userJoinedClubs.length}
          </Typography>
          <Typography color="text.secondary" component="p" variant="h6">
            Joined Clubs
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent className={StatisticCardCSS.cardContentRight}>
          <div>
            <GroupsIcon className={StatisticCardCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
