import Rocket from "../types/Rocket";
import apiClient from "./apiClient";

export async function getRockets() {
  const response = await apiClient.get("/testrockets.json");

  return response.data;
}

export async function getRocket(id: string) {
  const response = await apiClient.get("/testrockets.json");

  return (response.data as Rocket[]).find(rocket => rocket.id === id);
}

export async function getTeamMembers() {
  const response = await apiClient.get("/teamMembers.json");

  return response.data;
}

export async function getSlides() {
  const response = await apiClient.get("/slides.json");

  return response.data;
}
