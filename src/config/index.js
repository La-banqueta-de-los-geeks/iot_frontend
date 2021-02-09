let url_api = String(process.env.URL_API)
const config = {
  url_api,
  v1: {
    users: {
      login: `${url_api}/v1/users/login`
    }
  }

};
export default config;
