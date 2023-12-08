import { Grid, Typography, TextField, Button, Card } from "@mui/material";

import * as clubAPI from "../../API/clubAPI";
import CreateClubFormCSS from "./CreateClubForm.module.css";

import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../../contexts/SnackbarContext";

export default function CreateClubForm() {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const createClubSubmitHandler = async (e) => {
    e.preventDefault();

    const clubData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await clubAPI.createClub(clubData);
      const createdClubId = response._id;

      if (createdClubId) {
        openSnackbar("Club created!", "success");
        navigate(`/club/${createdClubId}`);
      }
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  return (
    <Card
      component="form"
      className={CreateClubFormCSS.createClubFormContainer}
      onSubmit={createClubSubmitHandler}
    >
      <Typography
        className={CreateClubFormCSS.formTitle}
        variant="h6"
        gutterBottom
      >
        Create Club
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Club Name"
            fullWidth
            autoComplete="name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phoneNumber"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="summary"
            name="summary"
            label="Summary"
            fullWidth
            autoComplete="summary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="imageURL"
            name="imageURL"
            label="Image URL"
            fullWidth
            autoComplete="imageURL"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Button
        className={CreateClubFormCSS.submitBtn}
        type="submit"
        fullWidth
        variant="contained"
      >
        Create Club
      </Button>
    </Card>
  );
}
