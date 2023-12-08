import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { SnackbarProvider } from "./contexts/SnackbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
