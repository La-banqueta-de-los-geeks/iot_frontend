import api from '../ApiInstance';

export default {
  login: (payload) => api.post('/v1/users/login', payload),
  register: (payload) => api.post('/v1/users/', payload),
};
