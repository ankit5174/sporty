import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react";
import { getAllLeagues } from "~/services/api/leagues"

export function useLeagues(filters: {sport?: string, name?: string} = {}) {
    const {isFetching, data: leagues} = useQuery({ queryKey: ['leagues'], queryFn: getAllLeagues, placeholderData: [], staleTime: 2 * 60 * 1000})

    const sports = useMemo(
        () => [...new Set(leagues?.map((league) => league.strSport))],
        [leagues]
    );

    const filteredLeagues = useMemo(() => {
        if (!leagues) return [];

        const sportFiltered = filters.sport && filters.sport != "All Sports"
        ? leagues.filter((league) => league.strSport === filters.sport)
        : leagues;

        if (!filters.name) return sportFiltered;
        const lowerCaseName = filters.name?.toLowerCase()

       return sportFiltered.filter(league => league.strLeague.toLowerCase().includes(lowerCaseName) || league.strLeagueAlternate.toLowerCase().includes(lowerCaseName))
    }, [leagues, filters.sport, filters.name]);
    

    return { isFetching, leagues: filteredLeagues, sports}
}