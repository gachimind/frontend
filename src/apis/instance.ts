import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const noAuthInstance = axios.create({ baseURL: BASE_URL });

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

export { noAuthInstance };
