import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage } from '../modules/common/types';

type geoProdResponse = {
  message: string;
  data: {
    id: string;
    title: string;
    language: string;
    quotes: string;
    author: string;
    file: {
      id: string;
      name: string;
      type: string;
      data: string;
      fieldsId: string;
    };
  };
};

type BodyStrategy = FormData;

export const geoProdApi = createApi({
  reducerPath: 'geoProdApi',
  tagTypes: ['geoProd'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getGeoProd: build.query<geoProdResponse, TLanguage>({
      query: () => `geoProd/getAll`,
      providesTags: [{ type: 'geoProd', id: 'LIST' }],
    }),
    updateGeoProd: build.mutation<void, BodyStrategy>({
      query: (body) => ({
        url: 'geoProd/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'geoProd', id: 'LIST' }],
    }),
  }),
});

export const { useGetGeoProdQuery, useUpdateGeoProdMutation } = geoProdApi;
