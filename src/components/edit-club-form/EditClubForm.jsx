import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import * as clubAPI from "../../API/clubAPI";

import EditClubFormCSS from "./EditClubForm.module.css";

export default function EditClubForm() {
  const navigate = useNavigate();
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
      await clubAPI.editClub(clubData, clubId);

      navigate(`/club/${clubId}`);
    } catch (err) {
      console.log(err);
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
