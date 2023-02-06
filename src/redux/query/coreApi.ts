import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('accessToken');

      if (token) {
        headers.set('authorization', 'Bearer ' + token);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: () => ({}),
});
