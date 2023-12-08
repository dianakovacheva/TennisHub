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

import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "../../contexts/SnackbarContext";

import * as courtAPI from "../../API/courtAPI";
import CreateCourtCSS from "./CreateCourt.module.css";

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

export default function CreateCourt() {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const { clubId } = useParams();

  const createCourtSubmutHandlers = async (e) => {
    e.preventDefault();

    const courtData = Object.fromEntries(new FormData(e.currentTarget));

    const court = { ...courtData, clubId };

    try {
      const response = await courtAPI.createCourt(court);

      if (response) {
        openSnackbar("Court created!", "success");

        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  return (
    <Card
      component="form"
      className={CreateCourtCSS.createCourtFormContainer}
      onSubmit={createCourtSubmutHandlers}
    >
      <Typography
        className={CreateCourtCSS.formTitle}
        variant="h6"
        gutterBottom
      >
        Create Court
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
            defaultValue="Clay"
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
          <RadioGroup row name="indoor">
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
          <RadioGroup row name="lighting">
            <FormControlLabel
              name="lighting"
              value="true"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              name="lighting"
              value="false"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Button
        className={CreateCourtCSS.submitBtn}
        type="submit"
        fullWidth
        variant="contained"
      >
        Create Court
      </Button>
    </Card>
  );
}
