import {
  React,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";

import "./Calendar.css";
import { getAllBookings } from "../../API/bookingAPI";
import { getClubCourts } from "../../API/clubAPI";

const localizer = momentLocalizer(moment);



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
        resourceTitleAccessor="title"
        formats={{
          dayHeaderFormat: (date) => moment(date).format("dddd, D MMMM Y"),
        }}
      />
    </div>
  );
}
