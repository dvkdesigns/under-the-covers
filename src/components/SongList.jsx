import React from "react";
import "../styles/SongList.scss";

const songs = [
  { title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
  { title: "Hotel California", artist: "Eagles", duration: "6:30" },
  { title: "Imagine", artist: "John Lennon", duration: "3:07" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
  { title: "Billie Jean", artist: "Michael Jackson", duration: "4:54" },
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
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
