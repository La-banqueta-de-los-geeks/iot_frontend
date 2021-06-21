import axios from 'axios';
import config from '../config';

const ApiInstance = axios.create({
  baseURL: config.url_api,
  headers: { 'Content-Type': 'application/json' },
});

export const setAuthUserToken = (token) => {
  if (token)
    ApiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export default ApiInstance;
