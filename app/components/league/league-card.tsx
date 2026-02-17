import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

export function LeagueCard({ league, onClick }) {
  return (
    <Card elevation={3} sx={{height:'100%'}}>
      <CardActionArea onClick={() => onClick(league.idLeague)} sx={{height:'100%'}}>
        <CardContent>
          <Typography variant="h6">{league.strLeague}</Typography>
          <Typography variant="body2" color="text.secondary">
            Sport: {league.strSport}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Alternate: {league.strLeagueAlternate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}