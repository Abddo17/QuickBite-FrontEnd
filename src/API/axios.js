// api/axios.js

import axios from "axios";

export const backendBaseUrl =
  "https://quickbite-backend-production-0d77.up.railway.app";
export const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
