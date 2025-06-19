import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="movie-poster">
      <img src={POSTER_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
