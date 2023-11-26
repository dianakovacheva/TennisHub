import { React, useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";

import "./Calendar.css";
import { getAllBookings } from "../../API/bookingAPI";
import { getClubCourts } from "../../API/clubAPI";

const localizer = momentLocalizer(moment);

export default function Calendar() {
  const [bookings, setBookings] = useState([]);
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    getAllBookings()
      .then((result) =>
        setBookings(
          result.map((booking) => ({
            title: booking.players
              .reduce(
                (acc, curr) => acc + `${curr.firstName} ${curr.lastName}\n`,
                ""
              )
              .trim(),
            start: moment(booking.startTime).toDate(),
            end: moment(booking.endTime).toDate(),
            resourceId: booking.courtId,
          }))
        )
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getClubCourts()
      .then((result) =>
        setCourts(result.sort((a, b) => a.courtName - b.courtName))
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="calendar-container">
      <BigCalendar
        culture="de-DE"
        localizer={localizer}
        events={bookings}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        defaultView="day"
        views={["day"]}
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
    </div>
  );
}
