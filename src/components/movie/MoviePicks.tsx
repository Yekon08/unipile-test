import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { handleMoviePicksState } from "../../store/movieThunk";

const MoviePicks = () => {
  const moviePicks = useAppSelector((state) => state.movie.moviePicks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleMoviePicksState());
  }, []);

  if (moviePicks.length > 0) {
    return (
      <Box sx={{ marginTop: "35px" }}>
        <Typography variant="body1">Favorite movie per letter :</Typography>
        {moviePicks.length > 0 &&
          moviePicks.map((movie: string) => (
            <Typography key={movie} variant="body1">
              {movie}
            </Typography>
          ))}
      </Box>
    );
  }

  return <></>;
};

export default MoviePicks;
