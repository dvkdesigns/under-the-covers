// Footer.js
import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=61564662907590"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link facebook"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link youtube"
          >
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a
            href="https://www.instagram.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link instagram"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <p className="footer-text">
          &copy; 2024 Under the Covers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
