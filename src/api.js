import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export default api;
