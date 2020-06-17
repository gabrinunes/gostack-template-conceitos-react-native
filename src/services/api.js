import axios from "axios";

const api = axios.create({
  baseURL: "ip da máquina:3333",
});

export default api;
