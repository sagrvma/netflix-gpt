import { useEffect } from "react";
import ai from "../utils/gemini";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Explain how AI works in a few words",
    });
    console.log(response.text);
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar-input"
          placeholder="What would like to watch today?"
        ></input>
        <button className="search-bar-btn">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
