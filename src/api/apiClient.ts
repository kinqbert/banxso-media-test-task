import axios from "axios";

const BASIC_URL = "http://localhost:5173/src/api";

export const rocketsApiClient = axios.create({
  baseURL: BASIC_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

