import { MyProfileResponse } from '@customTypes/userType';

import { coreApi } from './coreApi';

const headers = {
  authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
};

const USER_API = '/api/users';

export const userApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<MyProfileResponse, void>({
      query: () => {
        return {
          url: USER_API + '/me',
          headers,
        };
      },
      transformResponse: (response: { data: MyProfileResponse }) => response.data,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;