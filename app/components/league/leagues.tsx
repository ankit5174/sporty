import { Grid } from "@mui/material";
import {LeagueCard} from "./league-card";

export function Leagues({leagues, onClick}) {
   return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
      {leagues.map((league) => (
        <Grid item size={{ xs: 2, sm: 4, md: 2 }} key={league.idLeague} >
          <LeagueCard league={league} onClick={() => onClick(league.idLeague)} />
        </Grid>
      ))}
    </Grid>
  );
}
