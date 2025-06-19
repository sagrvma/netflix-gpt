import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="movie-list">
      <h1 className="movie-list-title">{title}</h1>
      <div className="movie-card-list">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
