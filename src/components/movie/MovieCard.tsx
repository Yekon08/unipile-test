import { Typography } from "@mui/material";
import { MovieInterface } from "../../interfaces/movies";

interface Props {
  movie: MovieInterface;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div>
      <Typography variant="body1">{movie.Title}</Typography>
    </div>
  );
};

export default MovieCard;
