import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage } from '../modules/common/types';

type HomeResponse = {
  message: string;
  data: {
    id: string;
    title: string;
    text: string;
    language: string;
    file: {
      id: string;
      name: string;
      type: string;
      data: string;
      fieldsId: any;
    };
  };
};
type BackgroundResponse = {
  message: string;
  data: {
    id: string;
    mainFile: {
      id: string;
      name: string;
      type: string;
      data: string;
      fieldsId: any;
    };
  };
};

type BodyHeme = FormData;

export const homeApi = createApi({
  reducerPath: 'homeApi',
  tagTypes: ['Home'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getAllHome: build.query<HomeResponse, TLanguage>({
      query: () => `main/getAll`,
      providesTags: (result) =>
        result?.data ? [{ type: 'Home', id: result.data.id }] : [],
    }),
    getBackground: build.query<BackgroundResponse, TLanguage>({
      query: () => `main/getBackground`,
      providesTags: (result) =>
        result?.data ? [{ type: 'Home', id: result.data.id }] : [],
    }),
    updateHome: build.mutation<void, BodyHeme>({
      query: (body) => ({
        url: 'main/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Home', id: 'LIST' }],
    }),
    updateHomeBackground: build.mutation<void, BodyHeme>({
      query: (body) => ({
        url: 'main/uploadBackground',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Home', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllHomeQuery,
  useGetBackgroundQuery,
  useUpdateHomeMutation,
  useUpdateHomeBackgroundMutation,
} = homeApi;
