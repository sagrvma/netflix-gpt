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
        width="100%"
        height="100%"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
