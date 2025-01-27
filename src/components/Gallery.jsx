import React from "react";

const InstagramFeed = () => {
  return (
    <div className="gallery>">
      <h2>Follow Us on Instagram</h2>
      <div className="instagram-embed">
        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink="https://www.instagram.com/underthecoverssfl/" 
          data-instgrm-version="14" 
          style={{ maxWidth: "100%", margin: "0 auto" }}
        ></blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
      <a href="https://www.instagram.com/underthecoverssfl/" target="_blank" rel="noopener noreferrer">
  View our Instagram
</a>
    </div>
  );
};

export default InstagramFeed;
