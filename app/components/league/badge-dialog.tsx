import { CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

export function BadgeDialog({
  open,
  onClose,
  badge,
  isLoading,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Season Badge</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        {isLoading ? (
          <CircularProgress />
        ) : badge?.strBadge ? (
          <>
            <Typography mb={2}>{badge.strSeason}</Typography>
            <img
              src={badge.strBadge}
              alt="Season Badge"
              style={{ maxWidth: "200px" }}
            />
          </>
        ) : (
          <Typography>No badge available</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}