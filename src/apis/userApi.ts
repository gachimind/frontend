import { noAuthInstance } from '@apis/instance';

const USER_API = '/api/users';

const userApi = {
  // 닉네임 중복 검사
  duplicateCheck: (newNickname: string) => noAuthInstance.get(USER_API + `/${newNickname}`),
};

export default userApi;
