import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}` ?? "https://pentecostes.org",
  withCredentials: true,
});

export default api;
