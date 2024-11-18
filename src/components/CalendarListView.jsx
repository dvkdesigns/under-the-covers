import React from "react";
import "../styles/CalendarListView.scss";

const CalendarListView = () => {
  // Sample event data stored in the component file
  const events = [
    { id: 1, title: "Angry Warthog Saloon", date: "2025-1-04", time: "9:00 PM - Midnight" },
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
