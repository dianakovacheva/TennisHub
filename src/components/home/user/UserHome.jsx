import { useContext } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";

import UserHomeCSS from "../user/UserHome.module.css";

import AuthContext from "../../../contexts/AuthContext";
import StatisticCard from "./statisticCard/StatisticCard";

export default function UserHome() {
  const { userCreatedClubs } = useContext(AuthContext);

  return (
    <Box className={UserHomeCSS.statisticCardsSection}>
      <StatisticCard />
      <Card className={UserHomeCSS.cardHolder}>
        <Box>
          <CardContent className={UserHomeCSS.cardContentLeft}>
            <Typography component="div" variant="h3">
              {userCreatedClubs.length}
            </Typography>
            <Typography color="text.secondary" component="p" variant="h6">
              Created Clubs
            </Typography>
          </CardContent>
        </Box>
        <Box>
          <CardContent className={UserHomeCSS.cardContentRight}>
            <div>
              <GroupsIcon className={UserHomeCSS.groupsIcon} />
            </div>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
