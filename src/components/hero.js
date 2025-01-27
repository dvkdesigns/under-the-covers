import Logo from "../assets/logo.png";
import Banner from "../assets/banner.webp";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div class="container">
        <aside id="LogoSection" class="left">
          <img src={Logo} alt="My Image" class="logo" />
          <hr />
          <p>
            Under the Covers is a Fort Lauderdale-based band, playing all genres
            of music! UTC brings energy, fun, & tongue in cheek action to every
            one of their shows!
          </p>
          <a href="mailto:underthecoverssfla@gmail.com">
            <button>Contact Us!</button>
          </a>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/p/Under-the-Covers-South-Florida-61564662907590/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/underthecoverssfl"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/underthecovers-m9t"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </aside>
        <aside id="BannerSection" class="right">
          <img src={Banner} alt="My Image" />
        </aside>
      </div>
    </section>
  );
};

export default Hero;
