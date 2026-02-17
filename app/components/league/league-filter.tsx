import { TextField, MenuItem } from "@mui/material";

export function LeagueFilter({ sports, value, onChange }) {
  return (
    <TextField
      select
      fullWidth
      size="small"
      label="Sport"
      value={value}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#868585",
            borderWidth: "2px",
          },
        },
        "& .MuiInputLabel-outlined": {
          color: "#2e2e2e",
          fontWeight: "bold",
        },
      }}
      onChange={(e) => onChange(e.target.value)}
    >
      <MenuItem value="All Sports">All Sports</MenuItem>
      {sports.map((sport) => (
        <MenuItem key={sport} value={sport}>
          {sport}
        </MenuItem>
      ))}
    </TextField>
  );
}