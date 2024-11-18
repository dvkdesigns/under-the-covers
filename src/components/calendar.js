import BandSilhouette1 from "../assets/band-silhouette.webp";
import CalendarListView from "../components/CalendarListView.jsx";
import "../styles/calendar.scss";

const Hero = () => {
  return (
    <section id="calendar">
      <div class="container">
        <div class="sidebar">
          <img src={BandSilhouette1} alt="My Image" width="500px" />
        </div>
        <div id="calendarList" class="main-content">
          <CalendarListView />
        </div>
      </div>
    </section>
  );
};

export default Hero;
