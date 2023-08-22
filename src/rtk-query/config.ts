import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { AppState } from '../store';
import { getAddGlobalLanguages } from '../modules/common/sliceCommon/slice.ts';
import { getAdmin } from '../modules/admin/signIn/slice.ts';

export const baseUrl = 'http://16.170.229.114/';

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

    // headers.set('Content-Type', 'application/json');
    headers.set('Authorization', getBasicAuthHeader(login, password));
    headers.set('Accept-Language', globalLanguages.toUpperCase());
    headers.set('password', '123456'); // TODO - Удалить когда бек сделает ручку
    return headers;
  },
};

interface configFetchBaseQuery {
  baseUrl: string;
  prepareHeaders: FetchBaseQueryArgs['prepareHeaders'];
}
