import { TextField } from "@mui/material";

export function LeagueSearchBar({ value, onChange }) {
  return (
    <TextField
      fullWidth
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
      size="small"
      label="Search League"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}