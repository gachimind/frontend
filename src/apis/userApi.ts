import { authInstance, noAuthInstance } from '@apis/instance';

import { MyKeywordsResponse, MyProfileResponse } from '@customTypes/userType';

const USER_API = '/api/users';

const userApi = {
  // 회원 정보 조회
  getUserInfo: () => authInstance.get<never, MyProfileResponse>(USER_API + '/me'),
  // 회원 키워드 조회
  getUserKeyword: () => authInstance.get<never, MyKeywordsResponse>(USER_API + '/me/keyword'),
  // 닉네임 중복 검사
  duplicateCheck: (newNickname: string) => noAuthInstance.get(USER_API + `/${newNickname}`),
  // 회원 정보 수정
  updateUserInfo: ({ newNickname, newProfileImg }: { newNickname: string; newProfileImg: string }) =>
    authInstance.patch(USER_API + '/me', { nickname: newNickname, profileImg: newProfileImg }),
  // 로그아웃
  logout: () => authInstance.get(USER_API + '/logout'),
};

export default userApi;
