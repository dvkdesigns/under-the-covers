import React from "react";
import "../styles/SongList.scss";

const songs = [
  { title: "Kryptonite", artist: "3 Doors Down" },
{ title: "You Shook Me All Night Long", artist: "AC/DC" },
{ title: "Cryin", artist: "Aerosmith" },
{ title: "You Oughta Know", artist: "Alanis Morrisette" },
{ title: "Man in the Box", artist: "Alice in Chains" },
{ title: "Beautiful Things", artist: "Benson Boone" },
{ title: "Mony Mony/Rock and Roll II", artist: "Billy Idol" },
{ title: "Rebel Yell", artist: "Billy Idol" },
{ title: "Piano Man (ACOUSTIC)", artist: "Billy Joel" },
{ title: "Hard to Handle", artist: "Black Crowes" },
{ title: "All the Small Things", artist: "Blink 182" },
{ title: "Livin' on a Prayer", artist: "Bon Jovi" },
{ title: "Wanted Dead or Alive", artist: "Bon Jovi" },
{ title: "500 Miles/Summer of '69 (Medley)", artist: "Bryan Adams/Proclaimers" },
{ title: "Machinehead", artist: "Bush" },
{ title: "Believe in a Thing Called Love", artist: "Darkness" },
{ title: "Pour Some Sugar on Me", artist: "Def Leppard" },
{ title: "Counting Blue Cars (ACOUSTIC)", artist: "Dishwalla" },
{ title: "Take Me Home Tonight", artist: "Eddie Money" },
{ title: "Free Your Mind", artist: "En Vogue" },
{ title: "Sweet Dreams/Seven Nation Army", artist: "White Stripes/Eurythmics" },
{ title: "Inside Out", artist: "Eve 6" },
{ title: "Take a Picture", artist: "Filter" },
{ title: "Everlong", artist: "Foo Fighters" },
{ title: "Friends in Low Places (ACOUSTIC)", artist: "Garth Brooks" },
{ title: "Easy Lover", artist: "Genesis" },
{ title: "Basketcase", artist: "Green Day" },
{ title: "Too Sweet (ACOUSTIC)", artist: "Hozier" },
{ title: "Drive (ACOUSTIC)", artist: "Incubus" },
{ title: "Don't Stop Believin'", artist: "Journey" },
{ title: "Danger Zone", artist: "Kenny Loggins" },
{ title: "Sex on Fire", artist: "Kings of Leon" },
{ title: "Cult of Personality", artist: "Living Color" },
{ title: "Harder to Breathe", artist: "Maroon 5" },
{ title: "Enter Sandman", artist: "Metallica" },
{ title: "Counting Stars (ACOUSTIC)", artist: "OneRepublic" },
{ title: "Alive", artist: "Pearl Jam" },
{ title: "Crazy Little Thing Called Love", artist: "Queen" },
{ title: "Bohemian Rhapsody", artist: "Queen" },
{ title: "Round and Round", artist: "Ratt" },
{ title: "Jessie's Girl/Your Love", artist: "Rick Springfield/The Outfield" },
{ title: "Tomorrow", artist: "Silverchair" },
{ title: "Allstar", artist: "Smashmouth" },
{ title: "Plush", artist: "Stone Temple Pilots" },
{ title: "Interstate Love Song", artist: "Stone Temple Pilots" },
{ title: "Santeria", artist: "Sublime" },
{ title: "Everybody Wants to Rule the World", artist: "Tears for Fears" },
{ title: "Signs", artist: "Tesla" },
{ title: "Possum Kingdom", artist: "Toadies" },
{ title: "Life is a Highway", artist: "Tom Cochran" },
{ title: "Open Up Your Eyes (ACOUSTIC)", artist: "Tonic" },
{ title: "Ain't Talkin' 'bout Love", artist: "Van Halen" },
{ title: "Blister in the Sun", artist: "Violent Femmes" },
{ title: "Shut Up and Dance", artist: "Walk the Moon" },
{ title: "Here I Go Again", artist: "Whitesnake" },
{ title: "Birthday", artist: "Beatles" },
{ title: "Twice as Hard", artist: "Black Crows" },
{ title: "You Give Love a Bad Name", artist: "Bon Jovi" },
{ title: "I Love Rock and Roll", artist: "Joan Jett" },
{ title: "Separate Ways", artist: "Journey" },
{ title: "Smells Like Teen Spirit", artist: "Nirvana" },
{ title: "Evenflow", artist: "Pearl Jam" },
{ title: "What I Got", artist: "Sublime" },
{ title: "Eye of the Tiger", artist: "Survivor" }
  
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
