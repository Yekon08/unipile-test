import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieReducer } from "../reducers/movieReducer";
import { Omdb } from "../../components/movie/Omdb";
import {
  GlobalStateInterface,
  SearchMoviesInterface,
} from "../../interfaces/store";
import { MovieDetailsInterface, MovieInterface } from "../../interfaces/movies";

export const initialState: GlobalStateInterface = {
  loading: false,
  searchMovies: {
    Response: "False",
    Search: [],
    totalResults: "0",
  },
  error: "",
  modal: false,
  modalId: "",
  modalError: "",
  modalLoading: false,
  movieData: {} as MovieDetailsInterface,
};

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
    const omdb = new Omdb();
    const data = await omdb.searchMovieId(id);
    return data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: movieReducer,
  extraReducers: (builder) => {
    builder.addCase(handleSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.searchMovies = action.payload;
      state.error = action.payload.Error;
    });
    builder.addCase(handleSearch.rejected, (state, action) => {
      state.loading = false;
      state.searchMovies = {
        Response: "false",
        Search: [],
        totalResults: "0",
      };
      state.error = action.error.message;
    });
    builder.addCase(handleSearchId.pending, (state) => {
      state.modalLoading = true;
    });
    builder.addCase(handleSearchId.fulfilled, (state, action) => {
      state.modalLoading = false;
      state.movieData = action.payload;
      state.error = action.payload.Error;
    });
    builder.addCase(handleSearchId.rejected, (state, action) => {
      state.modalLoading = false;
      state.movieData = {} as MovieDetailsInterface;
      state.error = action.error.message;
    });
  },
});

export const { setModalStatus, setModalId } = movieSlice.actions;
