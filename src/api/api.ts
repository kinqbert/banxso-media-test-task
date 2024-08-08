import Rocket from "../types/Rocket";
import { rocketsApiClient, serverApiClient } from "./apiClient";

export async function getRockets() {
  const response = await rocketsApiClient.get("");

  return response.data;
}

export async function getRocket(id: string) {
  const response = await rocketsApiClient.get("");

  return (response.data as Rocket[]).find((rocket) => rocket.id === id);
}

export async function getTeamMembers() {
  const response = await serverApiClient.get("/teamMembers.json");

  return response.data;
}

export async function getSlides() {
  const response = await serverApiClient.get("/slides.json");

  return response.data;
}
