import { useContext, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";

import UserHomeCSS from "../user/UserHome.module.css";

import AuthContext from "../../../contexts/AuthContext";
import StatisticCard from "./statistic-card/StatisticCard";
import { getUserById } from "../../../API/userAPI";

export default function UserHome() {
  const { userId } = useContext(AuthContext);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserById(userId)
      .then((result) => setUserData(result))
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <Box className={UserHomeCSS.statisticCardsSection}>
      <StatisticCard />
      <Card className={UserHomeCSS.cardHolder}>
        <Box>
          <CardContent className={UserHomeCSS.cardContentLeft}>
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
