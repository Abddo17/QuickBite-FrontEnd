// api/axios.js

import axios from "axios";

export const backendBaseUrl =
  "https://quickbite-production-61fb.up.railway.app";
export const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true,
});


export default axiosInstance;
