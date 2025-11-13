import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GithubUser } from "./types";

const USERNAME = "SuhrobKholmurodov";
export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    getUser: builder.query<GithubUser, void>({
      query: () => `users/${USERNAME}`,
    }),
  }),
});

export const { useGetUserQuery } = githubApi;
