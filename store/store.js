import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

export function initializeStore(preloadedState) {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
    preloadedState,
  });
}
