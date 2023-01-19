import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const authInstance = axios.create({ baseURL: BASE_URL });

authInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: sessionStorage.getItem('accessToken'),
  };

  return config;
});

// TODO: 실제 서버 사용시 주석 처리된 return으로 변경 필요
authInstance.interceptors.response.use((res) => {
  // return res.data.data;
  return res.data;
});

export { authInstance };
