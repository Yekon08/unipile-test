import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
