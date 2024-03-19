import axios from "axios";
 let  adminUrl ="https://api.openbrewerydb.org/v1";
export const baseURL = adminUrl;
export let AxiosInstance = axios.create({
  baseURL,
});
AxiosInstance.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default AxiosInstance;