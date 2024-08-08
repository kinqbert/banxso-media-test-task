import axios from "axios";

const ROCKETS_URL = "https://api.spacexdata.com/v4/dragons";
// const MOCK_ROCKETS_URL = "https://kinqbert.github.io/banxso-media-test-task/api/testrockets.json";
const SERVER_URL = "https://kinqbert.github.io/banxso-media-test-task/api";

export const rocketsApiClient = axios.create({
  baseURL: ROCKETS_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const serverApiClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

