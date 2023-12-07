import { Box, Card, CardContent, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import UserBookingsCSS from "./UserBookings.module.css";

export default function UserBookings({ userData }) {
  return (
    <Card className={UserBookingsCSS.cardHolder}>
      <Box>
        <CardContent className={UserBookingsCSS.cardContentLeft}>
          <Typography component="div" variant="h3">
            {userData.userBookings ? <>{userData.userBookings.length}</> : 0}
          </Typography>
          <Typography color="text.secondary" component="p" variant="h6">
            Number of Bookings
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent className={UserBookingsCSS.cardContentRight}>
          <div>
            <CalendarMonthIcon className={UserBookingsCSS.groupsIcon} />
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
