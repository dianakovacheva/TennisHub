import { React, useEffect, useState, useContext } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "moment/locale/de";

import { useParams } from "react-router-dom";
import { useSnackbar } from "../../contexts/SnackbarContext";

import "./Calendar.css";

import BookingModal from "../booking-modal/BookingModal";
import AuthContext from "../../contexts/AuthContext";

import * as clubAPI from "../../API/clubAPI";
import * as bookingAPI from "../../API/bookingAPI";

const localizer = momentLocalizer(moment);

export default function Calendar() {
  const [clubData, setClubData] = useState({});
  const [bookings, setBookings] = useState([]);
  const [courts, setCourts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [clubMembers, setClubMembers] = useState([]);
  const [currUser, setCurrUser] = useState({});
  const { userId } = useContext(AuthContext);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const { openSnackbar } = useSnackbar();

  const { clubId } = useParams();

  useEffect(() => {
    bookingAPI
      .getAllBookings()
      .then((result) =>
        setBookings(
          result.map((booking) => ({
            _id: booking._id,
            title: booking.players
              .reduce(
                (acc, curr) => acc + `${curr.firstName} ${curr.lastName}\n`,
                ""
              )
              .trim(),
            start: moment(booking.startTime).toDate(),
            end: moment(booking.endTime).toDate(),
            resourceId: booking.courtId,
            bookedBy: booking.bookedBy,
            players: booking.players,
            court: courts.find((court) => court._id == booking.courtId),
          }))
        )
      )
      .catch((error) => {
        console.log(error);
      });
  }, [courts, toggleRefresh]);

  useEffect(() => {
    Promise.all([
      clubAPI
        .getClubById(clubId)
        .then((result) => setClubData(result))
        .catch((error) => {
          console.log(error);
        }),
      clubAPI
        .getClubCourts(clubId)
        .then((result) =>
          setCourts(result.sort((a, b) => a.courtName - b.courtName))
        )
        .catch((error) => {
          console.log(error);
        }),
      clubAPI
        .getClubMembers(clubId)
        .then((result) => {
          setClubMembers(result);
          setCurrUser(result.find((member) => member._id == userId));
        })
        .catch((error) => {
          console.log(error);
        }),
    ]);
  }, [clubId, toggleRefresh]);

  let numCourts = courts.length;

  const requestRefreshHandler = () => {
    setToggleRefresh(!toggleRefresh);
  };

  const onSelectEvent = (e) => {
    const bookingId = e._id;
    const selectedBooking = bookings.find(
      (booking) => booking._id == bookingId
    );

    const bookingOwner = selectedBooking.players.find(
      (player) => player._id === userId
    );

    if (bookingOwner) {
      setEditMode(true);
      setSelectedBooking(selectedBooking);
      setIsModalOpen(true);
    }
  };

  // Book Court
  const bookCourt = async (bookingData) => {
    if (
      moment(bookingData.startTime).isSameOrAfter(moment(bookingData.endTime))
    ) {
      openSnackbar("End time must be after start time.", "error");

      throw new Error("End time must be after start time.");
    }

    try {
      const response = await bookingAPI.bookCourt(bookingData);

      if (response) {
        openSnackbar("Court booked!", "success");
        return response;
      }
    } catch (error) {
      openSnackbar(error.message, "error");
      throw new Error(error);
    }
  };

  // Edit Booking
  const editBooking = async (bookingData) => {
    try {
      const response = await bookingAPI.editBooking(bookingData);
      if (response) {
        requestRefreshHandler();
        openSnackbar("Booking edited!", "success");
      }
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  // Delete Booking
  const deleteBooking = async (bookingId) => {
    try {
      const response = await bookingAPI.deleteBooking(bookingId);
      if (response) {
        requestRefreshHandler();
        openSnackbar("Booking deleted!", "success");
      }
    } catch (error) {
      openSnackbar(error.message, "error");
    }
  };

  // Disable the selection of a slot in the past
  const handleSelectSlot = (slotInfo) => {
    const start = slotInfo.start;

    if (start < new Date()) {
      openSnackbar("Cannot select a slot in the past.", "error");

      return;
    }
    const clickedEvent = {
      ...slotInfo,
      courtId: slotInfo.resourceId,
      court: courts.find((court) => court._id == slotInfo.resourceId),
    };
    setSelectedEvent(clickedEvent);
    setSelectedCourt(clickedEvent.court);
    setEditMode(false);
    setIsModalOpen(true);
  };

  return (
    <div className="calendar-container">
      <h1 className="clubName">{clubData.name}</h1>
      {!numCourts && (
        <div>
          <p>No courts yet</p>
        </div>
      )}
      {!!numCourts && (
        <>
          <BigCalendar
            culture="de-DE"
            localizer={localizer}
            events={bookings}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={onSelectEvent}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultView="day"
            views={["day"]}
            step={60}
            timeslots={1}
            min={moment("1972-01-01T07:00:00").toDate()}
            max={moment("2100-12-31T21:30:00").toDate()}
            resources={courts.map((court) => ({
              id: court._id,
              title: court.courtName,
            }))}
            resourceIdAccessor="id"
            resourceTitleAccessor="title"
            formats={{
              dayHeaderFormat: (date) => moment(date).format("dddd, D MMMM Y"),
              eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                localizer.format(start, "HH:mm", culture) +
                " - " +
                localizer.format(end, "HH:mm", culture),
              timeGutterFormat: (date, culture, localizer) =>
                localizer.format(date, "HH:mm", culture),
            }}
            messages={{
              next: "→",
              previous: "←",
            }}
          />
          {currUser?._id && (
            <BookingModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              bookCourt={bookCourt}
              editBooking={editBooking}
              deleteBooking={deleteBooking}
              selectedCourt={selectedCourt}
              selectedEvent={selectedEvent}
              players={clubMembers}
              currUser={currUser}
              requestRefreshHandler={requestRefreshHandler}
              editMode={editMode}
              selectedBooking={selectedBooking}
            />
          )}
        </>
      )}
    </div>
  );
}
