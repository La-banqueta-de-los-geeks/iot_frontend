const urlApi = String(process.env.URL_API);
const config = {
  url_api: urlApi,
  v1: {
    users: {
      login: `${urlApi}/v1/users/login`,
    },
  },
};
export default config;
