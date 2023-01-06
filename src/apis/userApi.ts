import { MyProfileResponse } from '@customTypes/userType';

import { authInstance, noAuthInstance } from './instance';

const USER_API = '/api/users';

const userApi = {
  // TODO: 로그인
  // 회원 정보 조회
  getUserInfo: () => authInstance.get<never, MyProfileResponse>(USER_API + '/me'),
};

export default userApi;
