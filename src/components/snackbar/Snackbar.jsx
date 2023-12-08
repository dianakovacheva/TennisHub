import { Snackbar, Alert } from "@mui/material";

export default function SnackbarComponent({ open, message, onClose, type }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
