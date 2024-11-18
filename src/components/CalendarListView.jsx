import React from "react";
import "../styles/CalendarListView.scss";

const CalendarListView = () => {
  // Sample event data stored in the component file
  const events = [
    { id: 1, title: "Meeting with Team", date: "2024-10-29", time: "10:00 AM" },
    { id: 2, title: "Project Deadline", date: "2024-10-30", time: "All Day" },
    { id: 3, title: "Lunch with Client", date: "2024-11-01", time: "12:00 PM" },
    { id: 4, title: "Webinar on React", date: "2024-11-03", time: "03:00 PM" },
    { id: 5, title: "Monthly Team Sync", date: "2024-11-05", time: "09:00 AM" },
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
