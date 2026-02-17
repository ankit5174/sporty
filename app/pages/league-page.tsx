import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useSeasonBadges } from "~/hooks/league/useSeasonBadge";

export default function LeaguePage() {
  const { leagueId } = useParams()

  const { isFetching, league } = useSeasonBadges(leagueId);

  console.log(league)

  return <Box p={3}>
    {isFetching && <Box display={'flex'} flex={1} justifyContent={'center'} alignItems={'center'}><CircularProgress /></Box>}
    {league && <Box>
       <Typography variant="h4" mb={3}>
        {league.strSeason}
      </Typography>
      <img
        src={league.strBadge}
        alt="Season Badge"
      />
    </Box>
    }
  </Box>
}
