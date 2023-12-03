import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import { useNavigate } from "react-router-dom";
import * as clubAPI from "../../API/clubAPI";

import CreateClubFormCSS from "./CreateClubForm.module.css";

export default function CreateClubForm() {
  const navigate = useNavigate();

  const createClubSubmitHandler = async (e) => {
    e.preventDefault();

    const clubData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await clubAPI.createClub(clubData);
      const createdClubId = response._id;

      if (createdClubId) {
        navigate(`/club/${createdClubId}`);
      }
    } catch (err) {
      console.log(err);
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
