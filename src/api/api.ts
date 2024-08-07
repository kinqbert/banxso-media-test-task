import apiClient from "./apiClient";

export async function getRockets() {
  const response = await apiClient.get("/testrockets.json");

  return response.data;
}

export async function getTeamMembers() {
  const response = await apiClient.get("/teamMembers.json");

  return response.data;
}
