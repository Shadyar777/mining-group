import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage } from '../modules/common/types';

type Data = {
  id: number | string;
  title: string;
  text: string;
  language: string;
  file: string;
  type: 'job' | 'about_company' | 'investors';
};

export type TitleResponse = {
  message: string;
  data: Data[];
};

type BodyStrategy = FormData;

export const titleApi = createApi({
  reducerPath: 'titleApi',
  tagTypes: ['Title'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getTitle: build.query<TitleResponse, TLanguage>({
      query: () => `title/getAll`,
      providesTags: (result: TitleResponse | undefined) => {
        if (result) {
          return [
            ...result.data.map(({ id }) => ({
              type: 'Title' as const,
              id,
            })),
            { type: 'Title', id: 'LIST' },
          ];
        } else {
          return [{ type: 'Title', id: 'LIST' }];
        }
      },
    }),
    updateTitle: build.mutation<void, BodyStrategy>({
      query: (body) => ({
        url: 'title/update',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Title', id: 'LIST' }],
    }),
  }),
});

export const { useGetTitleQuery, useUpdateTitleMutation } = titleApi;
