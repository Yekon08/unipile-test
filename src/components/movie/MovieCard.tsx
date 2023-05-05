import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MovieInterface } from "../../interfaces/movies";
import { useAppDispatch } from "../../hooks";
import { setModalId, setModalStatus } from "../../store/slices/movieSlice";

interface Props {
  movie: MovieInterface;
}

const MovieCard = ({ movie }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{
        cursor: "pointer",
        width: "250px",
        transition: "all .3s ease",
        ":hover": {
          transform: "scale(1.03)",
        },
      }}
      onClick={() => {
        dispatch(setModalStatus(true));
        dispatch(setModalId(movie.imdbID));
      }}
    >
      <CardMedia
        component="img"
        alt={`${movie.Title} poster`}
        image={movie.Poster}
        sx={{ height: "auto", width: "100%", borderRadius: "4px" }}
      />
      <CardContent>
        <Typography variant="body1">{movie.Title}</Typography>
        <Typography variant="body2">
          {movie.Year} ({movie.Type})
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
