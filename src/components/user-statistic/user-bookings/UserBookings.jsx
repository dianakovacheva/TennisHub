import { Box, Card, CardContent, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import UserStatisticCSS from "../UserStatistic.module.css";

export default function UserBookings({ userData }) {
  return (
    <Card className={UserStatisticCSS.cardHolder}>
      <Box className={UserStatisticCSS.content}>
        <CardContent className={UserStatisticCSS.cardContentLeft}>
          <Typography component="div" variant="h3">
            {userData.userBookings ? <>{userData.userBookings.length}</> : 0}
          </Typography>
          <Typography color="text.secondary" component="p" variant="h6">
            Bookings Count
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent className={UserStatisticCSS.cardContentRight}>
          <div>
            <CalendarMonthIcon className={UserStatisticCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
