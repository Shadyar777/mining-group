import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage, TLanguageRequests } from '../modules/common/types';

type ActivitiesResponse = {
  message: string;
  data: {
    id: string;
    title: string;
    text: string;
    language: TLanguageRequests;
  }[];
};

type BodyActivities = {
  title: string;
  text: string;
};

export const activitiesApi = createApi({
  reducerPath: 'activitiesApi',
  tagTypes: ['Jobs'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getAllActivities: build.query<ActivitiesResponse, TLanguage>({
      query: () => `activities/getAll`,
    }),
    addActivities: build.mutation<void, BodyActivities>({
      query: (body) => ({
        url: 'activities/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }],
    }),
    updateActivities: build.mutation<
      void,
      BodyActivities & {
        id: number | string;
      }
    >({
      query: (body) => ({
        url: 'activities/update',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }],
    }),
    deleteJob: build.mutation<
      void,
      {
        id: string | number;
      }
    >({
      query: ({ id }) => ({
        url: `activities/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllActivitiesQuery,
  useAddActivitiesMutation,
  useUpdateActivitiesMutation,
  useDeleteJobMutation,
} = activitiesApi;
