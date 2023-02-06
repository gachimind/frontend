import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const noAuthInstance = axios.create({ baseURL: BASE_URL });
const authInstance = axios.create({ baseURL: BASE_URL });

noAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorResponse = {
      ...error.response.data,
      status: error.response.status,
    };
    return Promise.reject(errorResponse);
  },
);

authInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
  };

  return config;
});

authInstance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.clear();
      window.location.assign('/');
    }
    const errorResponse = {
      ...error.response.data,
      status: error.response.status,
    };
    return Promise.reject(errorResponse);
  },
);

export { authInstance, noAuthInstance };
