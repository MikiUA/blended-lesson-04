import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://640d9283b07afc3b0db06bfb.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/comments",
    }),

    addPost: builder.mutation({
      query: (body) => {
        return {
          url: API_ENDPOINT,
          method: "POST",
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      // invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const { useGetCommentsQuery, useAddPostMutation } = commentApi;
