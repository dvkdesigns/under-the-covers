import React from "react";
import "../styles/SongList.scss";

const songs = [
  { title: "Kryptonite", artist: "3 Doors Down" },
  
];

const SongList = () => {
  return (
    <div className="song-list">
      <h2>Our Song List</h2>
      <table className="song-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
