import { apiClient } from "./client";

export const getAllLeagues = async () => {
  const { data } = await apiClient.get("/all_leagues.php");
  return data.leagues;
};

export const getSeasonBadge = async (leagueId: number) => {
  const { data } = await apiClient.get(
    `/search_all_seasons.php?badge=1&id=${leagueId}`
  );
  return data.seasons?.[0] ?? null;
};