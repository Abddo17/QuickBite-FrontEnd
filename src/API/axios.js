// api/axios.js

import axios from "axios";

export const backendBaseUrl =
  "https://quickbite-production-61fb.up.railway.app";
export const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (match) {
    config.headers["X-XSRF-TOKEN"] = decodeURIComponent(match[1]);
  }
  return config;
});

export default axiosInstance;
