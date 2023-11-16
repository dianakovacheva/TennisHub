import { React, useEffect, useRef, useCallback, useMemo } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./Calendar.css";

const localizer = momentLocalizer(moment);

const bookings = [
  {
    id: 1,
    title: "Sergey's Birthday",
    start: moment("2023-11-15T08:00:00").toDate(),
    end: moment("2023-11-15T20:00:00").toDate(),
    resourceId: 1,
  },
  {
    id: 2,
    title: "Court 1",
    start: moment("2023-11-16T12:00:00").toDate(),
    end: moment("2023-11-16T13:00:00").toDate(),
    resourceId: 2,
  },
  {
    id: 2,
    title: "Court 3",
    start: moment("2023-11-16T09:00:00").toDate(),
    end: moment("2023-11-16T12:30:00").toDate(),
    resourceId: 3,
  },
];

const courts = [
  { courtId: 1, title: "1" },
  { courtId: 2, title: "2" },
  { courtId: 3, title: "3" },
  { courtId: 4, title: "4" },
];

export default function Calendar(props) {
  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={bookings}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        defaultView="day"
        views={["day"]}
        min={moment("2023-11-15T07:00:00").toDate()}
        max={moment("2023-11-15T21:30:00").toDate()}
        resources={courts}
        resourceIdAccessor="courtId"
        resourceTitleAccessor="title"
        formats={{
          dayHeaderFormat: (date) => moment(date).format("dddd, D MMMM Y"),
        }}
      />
    </div>
  );
}
