import React, { createContext, useContext, useState } from "react";

import SnackbarComponent from "../components/snackbar/Snackbar";

const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "info",
  });

  const openSnackbar = (message, type) => {
    setSnackbar({ open: true, message, type });
  };

  const closeSnackbar = () => {
    setSnackbar({ open: false, message: "" });
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      <SnackbarComponent {...snackbar} onClose={closeSnackbar} />
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export { SnackbarProvider, useSnackbar };
