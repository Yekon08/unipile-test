import { Container, Typography } from "@mui/material";
import Searchbar from "./Searchbar";
import MoviesList from "./MoviesList";
import MoviePicks from "./MoviePicks";

const MovieContainer = () => {
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

      <MoviePicks />

      <MoviesList />
    </Container>
  );
};

export default MovieContainer;
