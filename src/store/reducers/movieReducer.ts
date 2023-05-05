import { StateType } from "../slices/movieSlice";

export const movieReducer = {
  moviesLoading: (state: StateType) => {
    if (state.loading === "idle") {
      state.loading = "pending";
    }
  },
};
