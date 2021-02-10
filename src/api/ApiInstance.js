import axios from 'axios'
import config from '../config'

const ApiInstance = axios.create({
  baseURL: config.url_api,
  ...headers()
});

function headers() {
  let template = { headers: { 'Content-Type': 'application/json' } }
  if (true)
    template['headers']['Authorization'] = `Bearer ${'Token'}`
  return template;
}

export default ApiInstance;