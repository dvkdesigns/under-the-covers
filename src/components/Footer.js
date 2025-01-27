// Footer.js
import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
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
            href="https://www.youtube.com/underthecovers-m9t"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link youtube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/underthecoverssfl"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link instagram"
          >
            <i className="fab fa-instagram"></i>
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
