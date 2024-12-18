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
            Under the Covers is a Fort Lauderdale-based band, playing all walks
            of music from all genres! UTC brings energy, fun, & tongue in cheek
            action to every one of their shows!
          </p>
          <button>Contact Us!</button>
        </aside>
        <aside id="BannerSection" class="right">
          <img src={Banner} alt="My Image" />
        </aside>
      </div>
    </section>
  );
};

export default Hero;
