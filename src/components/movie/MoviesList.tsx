import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import MovieCard from "./MovieCard";
import ModalContainer from "./ModalContainer";
import { MemoryMoviePickRepoStorage } from "../../MoviePicker/MemoryMoviePickRepoStorage";

const MoviesList = () => {
  const movies = useAppSelector((state) => state.movie.searchMovies);
  const errorMsg = useAppSelector((state) => state.movie.error);
  const loading = useAppSelector((state) => state.movie.loading);
  const moviePicks = useAppSelector((state) => state.movie.moviePicks);

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

  console.log("movie picks : ", moviePicks);

  return (
    <>
      <Box
        sx={{
          marginTop: "35px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {moviePicks.length > 0 &&
          moviePicks.map((movie: string) => (
            <Typography variant="body1">{movie}</Typography>
          ))}
        {movies.Search.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Box>

      <ModalContainer />
    </>
  );
};

export default MoviesList;
