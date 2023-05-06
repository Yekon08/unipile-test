import { createAsyncThunk } from "@reduxjs/toolkit";
import { Omdb } from "../MoviePicker/Omdb";
import { SearchMoviesInterface } from "../interfaces/store";
import { MovieDetailsInterface } from "../interfaces/movies";
import { MemoryMoviePickRepoStorage } from "../MoviePicker/MemoryMoviePickRepoStorage";
import { MoviePicker } from "../MoviePicker/MoviePicker";

export const handleSearch = createAsyncThunk<SearchMoviesInterface, string>(
  "movie/handleSearch",
  async (searchText: string) => {
    const omdb = new Omdb();
    const data = await omdb.searchMovies(searchText);
    return data;
  }
);

export const handleSearchId = createAsyncThunk<MovieDetailsInterface, string>(
  "movie/handleSearchId",
  async (id: string) => {
    //TODO?: find a best way to initialize class ?
    const omdb = new Omdb();
    const data = await omdb.searchMovieId(id);
    return data;
  }
);

export const handleMoviePicks = createAsyncThunk<string[], string>(
  "movie/handleMoviePicks",
  async (title: string) => {
    const moviePickRepo = new MemoryMoviePickRepoStorage();
    const moviePick = new MoviePicker(moviePickRepo);
    await moviePick.pick(title);
    const data = await moviePickRepo.getAll();
    return data;
  }
);

export const handleMoviePicksState = createAsyncThunk(
  "movie/handleMoviePicksState",
  async () => {
    const moviePickRepo = new MemoryMoviePickRepoStorage();
    const data = await moviePickRepo.getAll();
    return data;
  }
);
