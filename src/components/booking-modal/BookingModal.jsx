import {
  Modal,
  Button,
  TextField,
  Chip,
  Autocomplete,
  Typography,
  Stack,
} from "@mui/material";

import moment from "moment";

import { useState, useEffect } from "react";

import BookingModalCSS from "./BookingModal.module.css";

const formatDateTime = (datetime) => {
  return moment(datetime).format().split("+")[0];
};

export default function BookingModal({
  isOpen,
  onClose,
  bookCourt,
  editBooking,
  selectedCourt,
  selectedEvent,
  players,
  currUser,
  requestRefreshHandler,
  editMode = false,
  selectedBooking,
}) {
  const selectedCourtId = selectedCourt?._id;
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const fixedOptions = [currUser];

  const [value, setValue] = useState([...fixedOptions]);

  const [booking, setBooking] = useState({
    courtId: "",
    bookedBy: "",
    startTime: "",
    endTime: "",
    players: [],
    court: {},
  });

  if (!editMode) {
    useEffect(() => {
      setValue([...fixedOptions]);
    }, [currUser]);
    useEffect(() => {
      setStartTime(formatDateTime(selectedEvent?.start));
      setEndTime(formatDateTime(selectedEvent?.end));
    }, [selectedEvent]);

    useEffect(() => {
      setBooking({
        ...booking,
        courtId: selectedCourt?._id,
        bookedBy: currUser._id,
        players: value,
        startTime: startTime,
        endTime: endTime,
      });
    }, [value, startTime, endTime]);
  } else {
    useEffect(() => {
      setValue(selectedBooking.players);
    }, [selectedBooking]);

    useEffect(() => {
      setStartTime(formatDateTime(selectedBooking?.start));
      setEndTime(formatDateTime(selectedBooking?.end));
    }, [selectedBooking]);

    useEffect(() => {
      setBooking({
        ...selectedBooking,
        courtId: selectedBooking?.court._id,
        bookedBy: currUser._id,
        players: value,
        startTime: startTime,
        endTime: endTime,
      });
    }, [value, startTime, endTime]);
  }

  const onCloseHandler = (e) => {
    setBooking({});
    // setValue([...fixedOptions]);
    // Close the modal
    onClose();
  };

  // Book Court
  const bookCourtHandler = async (e) => {
    e.preventDefault();

    await bookCourt(booking);
    requestRefreshHandler();

    e.target.reset();

    setBooking({});
    // Close the modal
    onClose();
  };

  // Edit Booking
  const editBookingHandler = async (e) => {
    e.preventDefault();

    await editBooking(booking);
    requestRefreshHandler();

    setBooking({});
    onClose();
  };

  return (
    <Modal
      component="form"
      open={isOpen}
      onClose={onCloseHandler}
      className={BookingModalCSS.modalContainer}
      onSubmit={bookCourtHandler}
    >
      <div className={BookingModalCSS.bookCourtForm}>
        <Typography className={BookingModalCSS.courtName}>
          Selected Court: {selectedCourt?.courtName || booking.court?.courtName}
        </Typography>
        <div className={BookingModalCSS.timeInputFields}>
          <TextField
            label="Start Time"
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Time"
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <Autocomplete
          multiple
          id="fixed-tags-demo"
          value={value}
          onChange={(event, newValue) => {
            console.log(fixedOptions);
            console.log(newValue);
            setValue([
              ...fixedOptions,
              ...newValue.filter(
                (option) => fixedOptions.indexOf(option) === -1
              ),
            ]);
          }}
          options={players}
          getOptionLabel={(option) => option?.fullName}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                label={option?.fullName}
                {...getTagProps({ index })}
                disabled={fixedOptions?.indexOf(option) !== -1}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Players" placeholder="Club members" />
          )}
        />
        {editMode && (
          <Stack className={BookingModalCSS.actionBtns}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={editBookingHandler}
            >
              Save
            </Button>
            <Button variant="contained" color="error" size="medium">
              Delete
            </Button>
          </Stack>
        )}

        {!editMode && (
          <Button variant="contained" color="primary" type="submit">
            Book Court
          </Button>
        )}
      </div>
    </Modal>
  );
}
