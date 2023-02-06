import { authInstance, noAuthInstance } from '@apis/instance';

const USER_API = '/api/users';

const userApi = {
  // 닉네임 중복 검사
  duplicateCheck: (newNickname: string) => noAuthInstance.get(USER_API + `/${newNickname}`),
  // 로그아웃
  logout: () => authInstance.get(USER_API + '/logout'),
};

export default userApi;
