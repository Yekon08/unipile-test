import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MovieInterface } from "../../interfaces/movies";

interface Props {
  movie: MovieInterface;
}

const MovieCard = ({ movie }: Props) => {
  console.log("movie: ", movie);
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
