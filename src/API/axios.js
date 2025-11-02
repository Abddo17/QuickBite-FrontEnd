// api/axios.js

import axios from "axios";

export const backendBaseUrl =
  "https://quickbite-production-61fb.up.railway.app";
export const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const xsrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];
    
  console.log("🔑 XSRF-TOKEN from cookie:", xsrfToken);
  console.log("🚀 Headers Axios will send:", config.headers);

  return config;
});

export default axiosInstance;
