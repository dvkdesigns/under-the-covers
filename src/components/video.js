import PromoVideo from "./MoviePlayer.jsx";
import BandSilhouette1 from "../assets/band-silhouette-dk.webp";
import "../styles/video.scss";

const Hero = () => {
  return (
    <section id="video">
      <div class="container">
        <div id="calendarList" class="main-content">
          <PromoVideo />
        </div>
        <div class="sidebar">
          <img src={BandSilhouette1} alt="My Image" width="500px" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
