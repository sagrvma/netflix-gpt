import { useDispatch } from "react-redux";
import ai from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addSearchedMovies } from "../utils/searchSlice";

const useMovieSuggestions = () => {
  const dispatch = useDispatch();
  const getMovieTMDB = async (movie) => {
    const searchedMovie = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await searchedMovie.json();

    const finalMovie = data.results.reduce(
      (maxPopularityMovie, currentMovie) => {
        return currentMovie.popularity > maxPopularityMovie.popularity
          ? currentMovie
          : maxPopularityMovie;
      }
    );

    return finalMovie;
  };

  const getGeminiMovies = async (userPrompt) => {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        "Give me a list of 5 movies for the following prompt" +
        userPrompt +
        " in the following format, no other words, only the movie names : Pulp Fiction, Reservoir Dogs, Django Unchained, The Hateful Eight, Kill Bill",
    });

    const movieSuggestions = response.text.split(", ");

    const promiseArray = movieSuggestions.map((movie) => getMovieTMDB(movie));

    const tmdbMovies = await Promise.all(promiseArray);
    console.log(promiseArray);

    dispatch(addSearchedMovies(tmdbMovies));
  };

  return getGeminiMovies;
};

export default useMovieSuggestions;
