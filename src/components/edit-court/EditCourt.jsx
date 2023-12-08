import {
  MenuItem,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "../../contexts/SnackbarContext";

import * as courtAPI from "../../API/courtAPI";
import * as clubAPI from "../../API/clubAPI";

import EditCourtCSS from "./EditCourt.module.css";

const surfaceType = [
  { value: "Clay", label: "Clay" },
  {
    value: "Concrete",
    label: "Concrete",
  },
  {
    value: "Hard",
    label: "Hard",
  },
  {
    value: "Grass",
    label: "Grass",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export default function EditCourt() {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const { clubId, courtId } = useParams();

  const [court, setCourt] = useState({
    courtName: "",
    surface: "",
    indoor: "",
    lighting: "",
  });

  useEffect(() => {
    clubAPI.getCourtById(courtId).then((result) => {
      setCourt(result);
    });
  }, [courtId]);

  const editCourtSubmitHandlers = async (e) => {
    e.preventDefault();

    const courtData = Object.fromEntries(new FormData(e.currentTarget));

    const court = { ...courtData, clubId, courtId };

    try {
      const response = await courtAPI.editCourt(court);

      if (response) {
        openSnackbar("Court edited!", "success");

        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  const onChange = (e) => {
    setCourt((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card
      component="form"
      className={EditCourtCSS.createCourtFormContainer}
      onSubmit={editCourtSubmitHandlers}
    >
      <Typography className={EditCourtCSS.formTitle} variant="h6" gutterBottom>
        Edit Court
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="courtName"
            name="courtName"
            label="Court Name"
            fullWidth
            autoComplete="courtName"
            variant="outlined"
            value={court.courtName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="surface"
            variant="outlined"
            required
            fullWidth
            name="surface"
            select
            label="Surface"
            value={court.surface}
            onChange={onChange}
          >
            {surfaceType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormLabel id="indoor">Indoor</FormLabel>
          <RadioGroup
            row
            name="indoor"
            onChange={onChange}
            value={court.indoor}
          >
            <FormControlLabel
              name="indoor"
              value="true"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              name="indoor"
              value="false"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Lighting
          </FormLabel>
          <RadioGroup
            row
            name="lighting"
            onChange={onChange}
            value={court.lighting}
          >
            <FormControlLabel
              name="lighting"
              value="true"
              control={<Radio />}
              label="Yes"
              //   onChange={onChange}
              //   checked={court.lighting ? true : false}
            />
            <FormControlLabel
              name="lighting"
              value="false"
              control={<Radio />}
              label="No"
              //   onChange={onChange}
              //   checked={!court.lighting ? true : false}
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Button
        className={EditCourtCSS.submitBtn}
        type="submit"
        fullWidth
        variant="contained"
      >
        Edit Court
      </Button>
    </Card>
  );
}
