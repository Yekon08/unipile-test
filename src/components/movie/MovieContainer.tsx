import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleSearch } from "../../store/slices/movieSlice";

const MovieContainer = () => {
  const dispatch = useAppDispatch();
  const testSelector = useAppSelector((state) => state.movie.searchMovies);
  const isLoading = useAppSelector((state) => state.movie.loading);

  console.log("test: ", testSelector);

  return (
    <div>
      <Typography variant="h1">Hello World !</Typography>

      <button onClick={() => dispatch(handleSearch())}>
        test search data redux
      </button>

      {isLoading === "pending" && "loading"}
    </div>
  );
};

export default MovieContainer;
