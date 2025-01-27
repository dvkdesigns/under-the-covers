import React from "react";
import BandSilhouette1 from "../assets/band-silhouette.webp";
import "../styles/Gallery.scss";


const InstagramFeed = () => {
  return (
    <div className="gallery">
      <div class="container">
    <div class="sidebar">
          <img src={BandSilhouette1} alt="My Image" width="500px" />
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
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
    </div>
    </div></div>
  );
};

export default InstagramFeed;