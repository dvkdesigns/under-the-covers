import React from 'react';
// Import the video file
import movie from '../assets/logo.mov';

const MoviePlayer = () => {
    return (
        <div className="movie-player">
            <video width="100%" height="auto" controls>
                <source src={movie} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MoviePlayer;
