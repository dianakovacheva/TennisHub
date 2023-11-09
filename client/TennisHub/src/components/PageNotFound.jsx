import * as React from "react";
import Button from "@mui/material/Button";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="section-container">
      <section className="warningMessage">
        <h1 className="heading">404</h1>
        <p className="oops">Oops...</p>
        <p className="text">We&apos;re sorry, but something went wrong.</p>
        <Button
          variant="contained"
          className="btn btn-secondary orange"
          href="/"
        >
          Home Page
        </Button>
      </section>
    </div>
  );
}
