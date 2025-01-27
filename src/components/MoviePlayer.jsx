import React, { useEffect } from 'react';

const SocialFeed = () => {
  useEffect(() => {
    // Dynamically load TikTok embed script
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on unmount to avoid duplicating it
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="social-feed">
      {/* TikTok Feed Embed */}
      <div className="tiktok-feed">
        <h2>Our TikTok Videos</h2>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@underthecoverssfl"
          data-unique-id="underthecoverssfl"
          data-embed-from="embed_page"
          data-embed-type="creator"
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@underthecoverssfl?refer=creator_embed"
            >
              @underthecoverssfl
            </a>
          </section>
        </blockquote>
      </div>

    </div>
  );
};

export default SocialFeed;
