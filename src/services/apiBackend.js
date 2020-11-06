import axios from "axios";
import { getToken } from "./auth";

const apiBackend = axios.create({
  baseURL: "http://localhost:3333"
});

apiBackend.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiBackend;