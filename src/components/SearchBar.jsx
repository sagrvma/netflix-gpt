import { useEffect, useRef } from "react";
import ai from "../utils/gemini";

const SearchBar = () => {
  const searchInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
  };

  const handleSearchClick = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        "Give me a list of 5 movies for the following prompt" +
        searchInput.current.value +
        " in the following format : Pulp Fiction, Reservoir Dogs, Django Unchained, The Hateful Eight, Kill Bill",
    });
    console.log(response.text);

    const movieSuggestions = response.text.split(", ");
    console.log(movieSuggestions);
  };

  // useEffect(() => {
  //   main();
  // }, []);

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
