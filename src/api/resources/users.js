import api from '../ApiInstance'
export default {
  create:  (payload) => {
    return  api.post('/v1/users/login', payload)
  }
}