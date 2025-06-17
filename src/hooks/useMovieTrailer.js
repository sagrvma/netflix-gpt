import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
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
    // console.log(trailerVideo);
    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    movieVideosList();
  }, []);
};

export default useMovieTrailer;
