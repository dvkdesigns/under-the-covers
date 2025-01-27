

import React from 'react';

const SocialFeed = () => {
    return (
        <div className="social-feed">
            {/* TikTok Feed Embed */}
            <div className="tiktok-feed">
                <h2>Our Videos</h2>
                <blockquote 
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@dannyk796"
                    data-unique-id="dannyk796"
                    style={{ maxWidth: '100%' }}
                >
                    <section>Loading Our Videos...</section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
            </div>


        </div>
    );
};

export default SocialFeed;

