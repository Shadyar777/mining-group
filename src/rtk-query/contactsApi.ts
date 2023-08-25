import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configFetchBaseQuery } from './config.ts';
import { TLanguage } from '../modules/common/types';

type ContactsResponse = {
  message: string;
  data: {
    id: number;
    address: string;
    phone: string;
    mail: string;
    language: string;
    location: string;
  };
};

type BodyContacts = {
  address: string;
  phone: string;
  mail: string;
  location: string;
};

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    ...configFetchBaseQuery,
  }),
  endpoints: (build) => ({
    getContacts: build.query<ContactsResponse, TLanguage>({
      query: () => `contacts/getContacts`,
      providesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    updateContacts: build.mutation<void, BodyContacts>({
      query: (body) => ({
        url: 'contacts/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const { useGetContactsQuery, useUpdateContactsMutation } = contactsApi;
