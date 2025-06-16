import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) {
    return;
  }
  const mainMovie = movies[6];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="main-container">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} description={overview} />
    </div>
  );
};

export default MainContainer;
