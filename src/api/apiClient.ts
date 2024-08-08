import axios from "axios";

const ROCKETS_URL = "http://localhost:5173/src/api";
const API_URL = "https://"

export const rocketsApiClient = axios.create({
  baseURL: ROCKETS_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default apiClient;
