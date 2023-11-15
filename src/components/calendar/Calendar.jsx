import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
const myEventsList = [];
import CalendarCSS from "../calendar/Calendar.module.css";

export default function Calendar(props) {
  return (
    <div className={CalendarCSS.calendarContainer}>
      <BigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
