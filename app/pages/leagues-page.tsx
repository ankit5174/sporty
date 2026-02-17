import type { Route } from "./+types/leagues-page";
import { Welcome } from "../components/welcome/welcome";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Leagues, LeagueFilter, LeagueSearchBar } from "~/components/league/";
import { useLeagues } from "~/hooks/league/useLeagues";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useNavigate } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sporty Leagues" }
  ];
}

export default function LeaguesPage() {
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");
  const [selectedLeague, setSelectedLeague] = useState(null);
  const debouncedSearch = useDebounce(search, 300);
  const { leagues, sports, isFetching } = useLeagues({ name: debouncedSearch, sport });
  const navigate = useNavigate();



  return <Box display={'flex'} flexDirection={'column'} p={3} gap={3}>
    <Typography variant="h4">
      Sports Leagues
    </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }} >
        <Grid item size={{ xs: 2, sm: 4, md: 2 }}>
          <LeagueSearchBar value={search} onChange={setSearch} />
        </Grid>
        <Grid item size={{ xs: 2, sm: 4, md: 2 }}>
          <LeagueFilter
            sports={sports}
            value={sport}
            onChange={setSport}
          />
        </Grid>
      </Grid>

    {isFetching && <Box display={'flex'} flex={1} justifyContent={'center'} alignItems={'center'}><CircularProgress /></Box>}

    <Leagues
      leagues={leagues}
      onClick={(id) => navigate(`/league/${id}`)}
    />

  </Box>
}
