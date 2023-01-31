import { authInstance, noAuthInstance } from '@apis/instance';

import { MyKeywordsResponse, MyProfileResponse } from '@customTypes/userType';

const USER_API = '/api/users';

const userApi = {
  // 회원 정보 조회
  getUserInfo: () => authInstance.get<never, MyProfileResponse>(USER_API + '/me'),
  // 회원 키워드 조회
  getUserKeyword: () => authInstance.get<never, MyKeywordsResponse>(USER_API + '/me/keyword'),
  // 닉네임 중복 검사
  logout: (newNickname: string) => noAuthInstance.get(USER_API + `/nickname?nickname=${newNickname}`),
};

export default userApi;
