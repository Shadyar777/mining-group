import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage } from '../modules/common/types';

type StrategyResponse = {
  message: string;
  data: {
    id: number | string;
    title: string;
    text: string;
    language: string;
    file: {
      id: string;
      name: string;
      type: string;
      data: string;
    };
  };
};

type BodyStrategy = FormData;

export const strategyApi = createApi({
  reducerPath: 'strategyApi',
  tagTypes: ['Strategy'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getStrategy: build.query<StrategyResponse, TLanguage>({
      query: () => `strategy/getAll`,
      providesTags: (result) =>
        result?.data ? [{ type: 'Strategy', id: result.data.id }] : [],
    }),
    addStrategy: build.mutation<void, BodyStrategy>({
      query: (body) => {
        return {
          url: 'strategy/update',
          method: 'POST',
          body: body,
        };
      },
      invalidatesTags: [{ type: 'Strategy', id: 'LIST' }],
    }),
  }),
});

export const { useGetStrategyQuery, useAddStrategyMutation } = strategyApi;
