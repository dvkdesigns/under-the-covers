import React, { useEffect } from "react";
import BandSilhouette1 from "../assets/band-silhouette.webp";
import "../styles/Gallery.scss";

const InstagramFeed = () => {
  useEffect(() => {
    // Load the Instagram embed script dynamically
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="gallery">
      <div className="container">
        <div className="sidebar">
          <img src={BandSilhouette1} alt="Band Silhouette" width="500px" />
        </div>
        <div className="instagram-feed">
          <h3>Follow Us on Instagram</h3>
          <div className="instagram-embed">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/underthecoverssfl/"
              data-instgrm-version="14"
              style={{ maxWidth: "100%", margin: "0 auto" }}
            ></blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
