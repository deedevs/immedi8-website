import axios from "axios";

const axiosConfig = axios.create({
  // baseURL: "https://con.immedi8money.com/api/v1",
  baseURL: "http://localhost:5002/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosConfig;
