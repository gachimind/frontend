import { noAuthInstance, authInstance } from './instance';

const USER_API = '/api/users';

const userApi = {
  // TODO: 로그인
  // 회원 정보 조회
  getUserInfo: () => {
    authInstance.get(USER_API + '/me');
  },
};

export default userApi;
