import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage } from '../modules/common/types';

export interface Data {
  id: string;
  title: string;
  text: string;
  language: string;
  file: File;
}

export interface File {
  id: string;
  name: string;
  type: string;
  data: string;
  fieldsId: any;
}

export type ValuesResponse = {
  message: string;
  data: Data[];
};

type BodyStrategy = FormData;

export const valuesApi = createApi({
  reducerPath: 'valuesApi',
  tagTypes: ['Values'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getValues: build.query<ValuesResponse, TLanguage>({
      query: () => `values/getAll`,
      providesTags: (result: ValuesResponse | undefined) => {
        if (result) {
          return [
            ...result.data.map(({ id }) => ({
              type: 'Values' as const,
              id,
            })),
            { type: 'Values', id: 'LIST' },
          ];
        } else {
          return [{ type: 'Values', id: 'LIST' }];
        }
      },
    }),
    addValues: build.mutation<void, BodyStrategy>({
      query: (body) => {
        return {
          url: 'values/create',
          method: 'POST',
          body: body,
        };
      },
      invalidatesTags: [{ type: 'Values', id: 'LIST' }],
    }),
    updateValues: build.mutation<void, BodyStrategy>({
      query: (body) => ({
        url: 'values/update',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Values', id: 'LIST' }],
    }),
    deleteValues: build.mutation<void, string | number>({
      query: (id) => ({
        url: `getAll/getById/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Values', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetValuesQuery,
  useAddValuesMutation,
  useUpdateValuesMutation,
  useDeleteValuesMutation,
} = valuesApi;
