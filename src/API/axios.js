// api/axios.js

import axios from "axios";

export const backendBaseUrl =
  "https://quick-bite-front-end-oav9.vercel.app";
export const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = decodeURIComponent(
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1] || ""
  );

  if (token) {
    config.headers["X-XSRF-TOKEN"] = token;
  }

  return config;
});

export default axiosInstance;
