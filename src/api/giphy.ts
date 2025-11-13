import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GiphyGif, GiphyResponse } from "./types";

const GIPHY_KEY = "VHVLGLNA2hlgRyYY1MaxMFXTuS3Lus38";

export const giphyApi = createApi({
  reducerPath: "giphyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.giphy.com/v1/gifs/" }),
  endpoints: (builder) => ({
    getCats: builder.query<GiphyGif[], number | void>({
      query: (limit = 50) => `search?q=cat&api_key=${GIPHY_KEY}&limit=${limit}`,
      transformResponse: (response: GiphyResponse) => response.data,
    }),
  }),
});

export const { useGetCatsQuery } = giphyApi;
