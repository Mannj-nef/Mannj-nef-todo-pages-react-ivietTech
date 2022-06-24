import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_DB_JSON,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => new URLSearchParams(params).toString(),
});
export default axiosClient;
