// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
//
// export const apiQuery = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://jsonplaceholder.typicode.com/posts',
//   }),
//   tagTypes: [],
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name: string) => `pokemon/${name}`,
//     }),
//   }),
// });
//
// const { endpoints } = apiQuery;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    getPosts: build.query<TPost[], void>({
      query: () => `posts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts' as const, id: 'LIST' },
            ]
          : [{ type: 'Posts' as const, id: 'LIST' }],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: 'goods',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `goods/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    // }),
  }),
});

export const { useGetPostsQuery } = goodsApi;
