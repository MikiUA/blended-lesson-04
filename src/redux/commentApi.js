import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://640d9283b07afc3b0db06bfb.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments:builder.query({
      query: () => API_ENDPOINT,
      providesTags:['Comments']
    }),
    addPost:builder.mutation({
      query: (body) => ({
        url:API_ENDPOINT,
        method:"POST",
        body
      }),invalidatesTags:['Comments']
    }),
    updateCommentCount:builder.mutation({
      query: ({id,...body}) => ({
        url:API_ENDPOINT+'/'+id,
        method:"PUT",
        body
      }),invalidatesTags:['Comments']
    }),
    deleteComment:builder.mutation({
      query: ({id}) => ({
        url:API_ENDPOINT+'/'+id,
        method:"DELETE"
      }),invalidatesTags:['Comments']
    }),
  }),
});

export const {useGetCommentsQuery,useAddPostMutation,useUpdateCommentCountMutation,useDeleteCommentMutation} = commentApi;
