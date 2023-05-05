import { Box, CircularProgress, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const movies = useAppSelector((state) => state.movie.searchMovies);
  const errorMsg = useAppSelector((state) => state.movie.error);
  const loading = useAppSelector((state) => state.movie.loading);

  console.log("movies: ", movies);
  console.log("error: ", errorMsg);

  if (loading) {
    return (
      <Box sx={{ display: "flex", marginTop: "35px" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (errorMsg) {
    return (
      <Typography sx={{ marginTop: "35px" }} variant="h4" color="error.main">
        {errorMsg}
      </Typography>
    );
  }

  return (
    <Box sx={{ marginTop: "35px" }}>
      {movies.Search.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </Box>
  );
};

export default MoviesList;
