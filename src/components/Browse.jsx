import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import "./Browse.css";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="browse">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </div>
  );
};

export default Browse;
