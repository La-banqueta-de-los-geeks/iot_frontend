import api from '../ApiInstance'
export default {
  login:  (payload) => {
    return  api.post('/v1/users/login', payload)
  },
  register:  (payload) => {
    return  api.post('/v1/users/', payload)
  }
}