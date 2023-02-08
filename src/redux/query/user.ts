import { MyKeywordsResponse, MyProfileResponse } from '@customTypes/userType';

import { coreApi } from './coreApi';

const USER_API = '/api/users';

export const userApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<MyProfileResponse, void>({
      query: () => {
        return {
          url: USER_API + '/me',
        };
      },
      transformResponse: (response: { data: MyProfileResponse }) => response.data,
      providesTags: ['User'],
    }),
    getUserKeyword: builder.query<MyKeywordsResponse, void>({
      query: () => {
        return {
          url: USER_API + '/me/keyword',
        };
      },
      transformResponse: (response: { data: MyKeywordsResponse }) => response.data,
      providesTags: ['UserKeyword'],
    }),
    updateUserInfo: builder.mutation({
      query: ({ newNickname, newProfileImg }: { newNickname: string; newProfileImg: string }) => ({
        url: USER_API + '/me',
        method: 'PATCH',
        body: { nickname: newNickname, profileImg: newProfileImg },
      }),
      invalidatesTags: ['User'],
    }),
    getLogout: builder.query<void, void>({
      query: () => {
        return {
          url: USER_API + '/logout',
        };
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        await queryFulfilled;
        sessionStorage.clear();
        dispatch(userApi.util.resetApiState());
      },
    }),
  }),
});

export const { useGetUserInfoQuery, useGetUserKeywordQuery, useUpdateUserInfoMutation, useLazyGetLogoutQuery } =
  userApi;
