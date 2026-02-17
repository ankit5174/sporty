import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react";
import { getAllLeagues, getSeasonBadge } from "~/services/api/leagues"

export function useSeasonBadges(leagueId: any) {
    const {isFetching, data: league} = useQuery({ queryKey: ['seasonBadge', leagueId], queryFn: () => getSeasonBadge(leagueId), placeholderData: null, staleTime: 2 * 60 * 1000})

    return { isFetching, league}
}