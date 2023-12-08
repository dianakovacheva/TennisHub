import {
  MenuItem,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
} from "@mui/material";

import SelectJoinedClubCSS from "./SelectJoinedClub.module.css";

export default function SelectJoinedClub({
  userJoinedClubs,
  onChange,
  onSubmitHandler,
}) {
  return (
    <Card
      component="form"
      className={SelectJoinedClubCSS.formContainer}
      onSubmit={onSubmitHandler}
    >
      <Typography
        className={SelectJoinedClubCSS.formTitle}
        variant="h6"
        gutterBottom
      >
        Select Club
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="clubId"
            variant="outlined"
            required
            fullWidth
            name="clubId"
            select
            label="Club"
            // value={court.surface}
            onChange={onChange}
          >
            {userJoinedClubs.map((club) => (
              <MenuItem key={club._id} value={club._id}>
                {club.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Button
        className={SelectJoinedClubCSS.submitBtn}
        type="submit"
        fullWidth
        variant="contained"
      >
        Next
      </Button>
    </Card>
  );
}
