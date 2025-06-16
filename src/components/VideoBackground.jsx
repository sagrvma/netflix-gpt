import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailer);
  if (!trailer) {
    return;
  }

  console.log(trailer.key);

  return (
    <div className="video-background">
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=" +
          trailer.key
        }
      ></iframe>
    </div>
  );
};

export default VideoBackground;
