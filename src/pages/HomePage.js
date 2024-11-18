import { Helmet } from "react-helmet"; // Import Helmet
import Hero from "../components/hero";
import Calendar from "../components/calendar";
import Video from "../components/video";
import Gallery from "../components/Gallery";
import About from "../components/about";
import SongList from "../components/SongList";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Under The Covers</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <Hero />
        <Calendar />
        <Video />

        <Gallery />
        <About />
        <SongList />
      </div>
    </>
  );
};

export default HomePage;
