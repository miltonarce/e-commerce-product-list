import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
