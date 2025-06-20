import { API_OPTIONS } from "../utils/constants";

const useMovieSuggestions = () => {
  const getSuggestedMovie = async () => {
    const movie = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        "Jaane Bhi Do Yaaro" +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movie.json();

    console.log(data.results);

    const finalMovie = data.results.reduce(
      (maxPopularityMovie, currentMovie) => {
        return currentMovie.popularity > maxPopularityMovie.popularity
          ? currentMovie
          : maxPopularityMovie;
      }
    );

    console.log(finalMovie);
  };

  getSuggestedMovie();
};

export default useMovieSuggestions;
