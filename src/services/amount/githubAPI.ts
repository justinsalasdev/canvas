import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const githubAPI = createApi({
  reducerPath: "githubAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    users: builder.query<any, any>({
      query: () => "users",
    }),
  }),
});

export const { useUsersQuery } = githubAPI;
