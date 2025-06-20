import { useRef } from "react";
import useMovieSuggestions from "../hooks/useMovieSuggestions";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const searchInput = useRef(null);

  const getGeminiMovies = useMovieSuggestions();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchClick = async () => {
    getGeminiMovies(searchInput.current.value);
  };

  const movieRedux = useSelector((store) => store.search.searchedMovies);
  console.log(movieRedux);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          ref={searchInput}
          className="search-bar-input"
          placeholder="What would like to watch today?"
        ></input>
        <button className="search-bar-btn" onClick={handleSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
