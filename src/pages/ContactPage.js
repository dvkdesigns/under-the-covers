import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import "../styles/ContactPage.scss"; // Import CSS file
import Logo from "../assets/logo.png";
import Group from "../assets/pbb-group.svg";
import Venmo from "../assets/UTC-qr-code.svg";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Under The Covers</title>
        <meta name="description" content="Connect with us on social media!" />
        <meta name="keywords" content="band, music, social media, contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="contact-container">
        <img src={Logo} alt="My Image" class="logo" />
        <img src={Group} alt="My Image" class="Group" />

        <h1 className="contact-title">Connect With Us</h1>
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61564662907590"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebook size={24} /> <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/underthecoverssfl/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram size={24} /> <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@underthecoverssfl?_t=ZT-8tQDHojYdkk&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTiktok size={24} /> <span>TikTok</span>
          </a>
          <a
            href="https://www.youtube.com/@underthecovers-m9t"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube size={24} /> <span>YouTube</span>
          </a>
          <img src={Venmo} alt="My Image" class="Venmo" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
