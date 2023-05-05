import { Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleSearch } from "../../store/slices/movieSlice";
import Searchbar from "./Searchbar";
import { useState } from "react";

const MovieContainer = () => {
  const dispatch = useAppDispatch();
  const testSelector = useAppSelector((state) => state.movie.searchMovies);
  const isLoading = useAppSelector((state) => state.movie.loading);

  console.log("test: ", testSelector);

  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        marginTop: "100px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Search for movies...</Typography>

      <Searchbar />

      {/* <button onClick={() => dispatch(handleSearch())}>
        test search data redux
      </button> */}

      {/* {isLoading === "pending" && "loading"} */}
    </Container>
  );
};

export default MovieContainer;
