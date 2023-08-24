import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configFetchBaseQuery } from './config.ts';
import {
  CreateBodyFields,
  DataById,
  DataGetAllFields,
  FieldsCommonResponse,
  QueryFieldsParams,
} from './types/fields-types.ts';
// import { createFormData } from '../utils';

export const fieldsApi = createApi({
  reducerPath: 'fieldsApi',
  tagTypes: ['Fields'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
    // timeout: 10000,
  }),
  endpoints: (build) => ({
    getFields: build.query<
      FieldsCommonResponse<DataGetAllFields>,
      QueryFieldsParams
    >({
      query: (params) => ({
        url: `fields/getAll`,
        method: 'POST',
        body: params,
      }),
      providesTags: [{ type: 'Fields', id: 'LIST' }],
    }),
    getFieldsById: build.query<
      FieldsCommonResponse<DataById>,
      { id: number; lng: string }
    >({
      query: ({ id }) => ({
        url: `fields/getByIdAdmin/${id}`,
        method: 'GET',
      }),
      // providesTags: (_, __, { id }) => [{ type: 'Fields', id: id.toString() }],
    }),
    updateFieldsById: build.mutation<
      FieldsCommonResponse<DataById>,
      CreateBodyFields
    >({
      query: (body) => ({
        url: `fields/update`,
        method: 'PATCH',
        body,
      }),
      // invalidatesTags: FIXME
    }),
    addFields: build.mutation<void, CreateBodyFields>({
      query: (body) => ({
        url: 'fields/create',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Fields', id: 'LIST' }],
    }),
    deleteFields: build.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `fields/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Fields', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetFieldsQuery,
  useUpdateFieldsByIdMutation,
  useGetFieldsByIdQuery,
  useAddFieldsMutation,
  useDeleteFieldsMutation,
} = fieldsApi;
