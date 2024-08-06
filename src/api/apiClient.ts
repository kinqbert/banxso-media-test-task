import axios from "axios";

const BASIC_URL = "https://api.spacexdata.com/v4/dragons";

const apiClient = axios.create({
  baseURL: BASIC_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
