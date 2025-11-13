import { giphyApi } from "@/api/giphy";
import { githubApi } from "@/api/github";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    [giphyApi.reducerPath]: giphyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(githubApi.middleware)
      .concat(giphyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
