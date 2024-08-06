import apiClient from "./apiClient";

export async function getRockets() {
  const response = await apiClient.get("");

  return response.data;
}
