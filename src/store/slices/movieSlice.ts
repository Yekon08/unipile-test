import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieReducer } from "../reducers/movieReducer";
import { Omdb } from "../../components/movie/Omdb";

export interface StateType {
  loading: string;
  searchMovies: {
    Response: string;
    Search: {
      Poster: string;
      Title: string;
      Type: string;
      Year: string;
      imdbID: string;
    }[];
    totalResults: string;
  };
  error: string;
}

export const initialState: StateType = {
  loading: "idle",
  searchMovies: {
    Response: "false",
    Search: [],
    totalResults: "0",
  },
  error: "",
};

export const handleSearch = createAsyncThunk(
  "movie/handleSearch",
  async (searchText: string) => {
    const omdb = new Omdb();
    const data = await omdb.searchMovies(searchText);
    return data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: movieReducer,
  extraReducers: (builder) => {
    builder.addCase(handleSearch.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(handleSearch.fulfilled, (state, action: any) => {
      state.loading = "idle";
      state.searchMovies = action.payload;
      state.error = "";
    });
    builder.addCase(handleSearch.rejected, (state, action: any) => {
      state.loading = "idle";
      state.searchMovies = {
        Response: "false",
        Search: [],
        totalResults: "0",
      };
      state.error = action.error.message;
    });
  },
});

export const { moviesLoading } = movieSlice.actions;
