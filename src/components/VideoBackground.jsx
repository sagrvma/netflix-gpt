import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieVideosList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const videos = json.results.filter((video) => video.type === "Clip");
    const trailerVideo = videos.length ? videos[0] : json.results[0];
    console.log(trailerVideo);
    dispatch(addTrailerVideo(trailerVideo));
  };

  const trailer = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailer);

  useEffect(() => {
    movieVideosList();
  }, []);

  if (!trailer) {
    return;
  }

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?si=ScV-oUvYA9L6dcvi"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen="0"
        autoPlay="1"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
