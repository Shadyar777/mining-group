import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { AppState } from '../store';
import { getAddGlobalLanguages } from '../modules/common/sliceCommon/slice.ts';
import { getAdmin } from '../modules/admin/signIn/slice.ts';

export const baseUrl = 'http://195.49.212.117/api';

export function getBasicAuthHeader(login: string, password: string): string {
  const encodedCredentials = btoa(`${login}:${password}`);
  return `Basic ${encodedCredentials}`;
}

export const configFetchBaseQuery: configFetchBaseQuery = {
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as AppState;
    const { login, password } = getAdmin(state).admin;
    const globalLanguages = getAddGlobalLanguages(state);
    headers.set('Authorization', getBasicAuthHeader(login, password));
    headers.set('Accept-Language', globalLanguages.toUpperCase());
    return headers;
  },
};

interface configFetchBaseQuery {
  baseUrl: string;
  prepareHeaders: FetchBaseQueryArgs['prepareHeaders'];
}
