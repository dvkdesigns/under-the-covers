import React from "react";
import "../styles/CalendarListView.scss";

const CalendarListView = () => {
  // Sample event data stored in the component file
  const events = [
    { id: 1, title: "Pompano Beach Brewery", date: "2025-2-28", time: "7:00 PM - 10 PM" },
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
