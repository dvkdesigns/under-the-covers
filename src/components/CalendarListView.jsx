import React from "react";
import "../styles/CalendarListView.scss";

const CalendarListView = () => {
  // Sample event data stored in the component file
  const events = [
    { id: 1, title: "Cheers Ft Lauderdale", date: "2025-8-22", time: "9:00 PM - 1:00 AM" },
    { id: 2, title: "Turn 3 Sports Bar", date: "2025-10-04", time: "9:30 PM - 1:30 AM" },

  ];

  return (
    <div className="calendar-list-view">
      <h2 className="calendar-title">Upcoming Events</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <div className="event-date">
              <span className="date">{event.date}</span>
              <span className="time">{event.time}</span>
            </div>
            <div className="event-title">{event.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarListView;
