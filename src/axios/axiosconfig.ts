import axios from 'axios';

const axiosConfig = axios.create({
  withCredentials:true,
  baseURL: process.env.URL_SERVER
});

export default axiosConfig;