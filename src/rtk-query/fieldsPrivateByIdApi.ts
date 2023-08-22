import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, getBasicAuthHeader } from './config.ts';
import { DataById, FieldsCommonResponse } from './types/fields-types.ts';
import { AppState } from '../store';
import { getAdmin } from '../modules/admin/signIn/slice.ts';
import { getAddGlobalLanguages } from '../modules/common/sliceCommon/slice.ts';

export const fieldsPrivateByIdApi = createApi({
  reducerPath: 'fieldsByIdApi',
  tagTypes: ['FieldsBy'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as AppState;
      const { login, password } = getAdmin(state).admin;
      const privatePassword = getAdmin(state).private.password;
      const globalLanguages = getAddGlobalLanguages(state);
      headers.set('Authorization', getBasicAuthHeader(login, password));
      headers.set('Accept-Language', globalLanguages.toUpperCase());
      headers.set('password', privatePassword);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getFieldsPrivateById: build.query<
      FieldsCommonResponse<DataById>,
      { id: number; lng?: string }
    >({
      query: ({ id }) => ({
        url: `fields/getById/${id}`,
        method: 'GET',
      }),
      providesTags: (_, __, { id }) => [
        { type: 'FieldsBy', id: id.toString() },
      ],
    }),
  }),
});

export const {
  useGetFieldsPrivateByIdQuery,
  useLazyGetFieldsPrivateByIdQuery,
} = fieldsPrivateByIdApi;
