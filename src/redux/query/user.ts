import { MyKeywordsResponse, MyProfileResponse } from '@customTypes/userType';

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
    getUserKeyword: builder.query<MyKeywordsResponse, void>({
      query: () => {
        return {
          url: USER_API + '/me/keyword',
          headers,
        };
      },
      transformResponse: (response: { data: MyKeywordsResponse }) => response.data,
      providesTags: ['User'],
    }),
    updateUserInfo: builder.mutation({
      query: ({ newNickname, newProfileImg }: { newNickname: string; newProfileImg: string }) => ({
        url: '/me',
        method: 'PATCH',
        headers,
        body: { nickname: newNickname, profileImg: newProfileImg },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUserInfoQuery, useGetUserKeywordQuery, useUpdateUserInfoMutation } = userApi;
