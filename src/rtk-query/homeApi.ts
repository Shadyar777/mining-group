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
    file: string;
  };
};
type BackgroundResponse = {
  message: string;
  data: {
    id: string;
    image: string;
    video: string;
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
      providesTags: () => [{ type: 'Home', id: 'OBJECT' }],
    }),
    updateHome: build.mutation<void, BodyHeme>({
      query: (body) => ({
        url: 'main/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Home', id: 'OBJECT' }],
    }),
    getBackground: build.query<BackgroundResponse, TLanguage>({
      query: () => `main/getBackground`,
      providesTags: () => [{ type: 'Home', id: 'BG' }],
    }),
    updateHomeBackground: build.mutation<void, BodyHeme>({
      query: (body) => ({
        url: 'main/uploadBackground',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Home', id: 'BG' }],
    }),
  }),
});

export const {
  useGetAllHomeQuery,
  useGetBackgroundQuery,
  useUpdateHomeMutation,
  useUpdateHomeBackgroundMutation,
} = homeApi;
