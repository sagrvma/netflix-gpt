import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div className="movie-poster">
      <img src={POSTER_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
