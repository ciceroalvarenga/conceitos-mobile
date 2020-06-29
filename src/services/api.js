import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.2.187:3333",
});

export default api;
