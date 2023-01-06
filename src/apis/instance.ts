import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const noAuthInstance = axios.create({ baseURL: BASE_URL });
const authInstance = axios.create({ baseURL: BASE_URL });

authInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: localStorage.getItem('accessToken'),
  };

  return config;
});

noAuthInstance.interceptors.response.use((res) => {
  return res.data.data;
});

authInstance.interceptors.response.use((res) => {
  return res.data.data;
});

export { noAuthInstance, authInstance };
