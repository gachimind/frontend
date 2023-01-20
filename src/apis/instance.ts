import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const authInstance = axios.create({ baseURL: BASE_URL });

authInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
  };

  return config;
});

authInstance.interceptors.response.use((res) => {
  return res.data.data;
});

export { authInstance };
