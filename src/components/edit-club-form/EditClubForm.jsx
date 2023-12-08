import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Grid, Typography, TextField, Button, Card } from "@mui/material";

import { useSnackbar } from "../../contexts/SnackbarContext";
import * as clubAPI from "../../API/clubAPI";

import EditClubFormCSS from "./EditClubForm.module.css";

export default function EditClubForm() {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const { clubId } = useParams();
  const [club, setClub] = useState({
    name: "",
    imageURL: "",
    summary: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    clubAPI.getClubById(clubId).then((result) => {
      setClub(result);
    });
  }, [clubId]);

  const editClubSubmitHandler = async (e) => {
    e.preventDefault();

    const clubData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await clubAPI.editClub(clubData, clubId);

      if (response) {
        openSnackbar("Club edited!", "success");
        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  const onChange = (e) => {
    setClub((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card
      component="form"
      className={EditClubFormCSS.editClubFormContainer}
      onSubmit={editClubSubmitHandler}
    >
      <Typography
        className={EditClubFormCSS.formTitle}
        variant="h6"
        gutterBottom
      >
        Edit Club
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Club Name"
            fullWidth
            value={club.name}
            autoComplete="name"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            value={club.address}
            autoComplete="address"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            value={club.phoneNumber}
            autoComplete="phoneNumber"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="summary"
            name="summary"
            label="Summary"
            fullWidth
            value={club.summary}
            autoComplete="summary"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="imageURL"
            name="imageURL"
            label="Image URL"
            fullWidth
            value={club.imageURL}
            autoComplete="imageURL"
            variant="outlined"
            onChange={onChange}
          />
        </Grid>
      </Grid>
      <Button
        className={EditClubFormCSS.submitBtn}
        type="submit"
        fullWidth
        variant="contained"
      >
        Edit Club
      </Button>
    </Card>
  );
}
