import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage, TLanguageRequests } from '../modules/common/types';
import { ColorForColorPickerType } from '../modules/admin/vacancies/utils/colorForColorPicker.ts';

type List = {
  id: number;
  backgroundColor: ColorForColorPickerType;
  title: string;
  conditions: string;
  tasks: string;
  phone: string;
  mail: string;
  language: TLanguageRequests;
  active: boolean;
};

type JobsResponse = {
  message: string;
  data: {
    title: string;
    list: List[];
  };
};

type BodyJob = {
  backgroundColor: ColorForColorPickerType;
  title: string;
  conditions: string;
  tasks: string;
  phone: string;
  mail: string;
  active: boolean;
};

type TAllJobsParams = {
  lng: TLanguage;
  active?: boolean;
};

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  tagTypes: ['Jobs'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getAllJobs: build.query<JobsResponse, TAllJobsParams>({
      query: ({ active }) => {
        const params = typeof active === 'undefined' ? `` : `?active=${active}`;
        return `jobs/getAll${params}`;
      },
      providesTags: (result: JobsResponse | undefined) => {
        if (result) {
          return [
            ...result.data.list.map(({ id }) => ({
              type: 'Jobs' as const,
              id,
            })),
            { type: 'Jobs', id: 'LIST' },
          ];
        } else {
          return [{ type: 'Jobs', id: 'LIST' }];
        }
      },
    }),
    addJob: build.mutation<void, BodyJob>({
      query: (body) => ({
        url: 'jobs/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }],
    }),
    updateJob: build.mutation<
      void,
      BodyJob & {
        id: number | string;
      }
    >({
      query: (body) => ({
        url: 'jobs/update',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }],
    }),
    deleteJob: build.mutation<void, any>({
      query: (id) => ({
        url: `jobs/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllJobsQuery, useAddJobMutation, useUpdateJobMutation } =
  jobsApi;
