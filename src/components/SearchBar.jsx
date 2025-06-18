const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
