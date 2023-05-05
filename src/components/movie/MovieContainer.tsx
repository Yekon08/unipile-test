import { Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleSearch } from "../../store/slices/movieSlice";
import Searchbar from "./Searchbar";
import { useState } from "react";
import MoviesList from "./MoviesList";

const MovieContainer = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.movie.loading);

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

      <MoviesList />
    </Container>
  );
};

export default MovieContainer;
