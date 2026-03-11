import axios from "axios";

const api = axios.create({
  baseURL: "https://devsquad26-taskmanager.vercel.app/api"
});

export default api;