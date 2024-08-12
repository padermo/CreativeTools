import axios from "axios";
const axiosConfig = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_URL_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
