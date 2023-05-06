import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { handleMoviePicksState } from "../../store/slices/movieSlice";

const MoviePicks = () => {
  const moviePicks = useAppSelector((state) => state.movie.moviePicks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleMoviePicksState());
  }, []);

  if (moviePicks.length > 0) {
    return (
      <Box sx={{ marginTop: "35px" }}>
        <Typography variant="body1">Favorite movies per letter :</Typography>
        {moviePicks.length > 0 &&
          moviePicks.map((movie: string) => (
            <Typography variant="body1">{movie}</Typography>
          ))}
      </Box>
    );
  }

  return <></>;
};

export default MoviePicks;
