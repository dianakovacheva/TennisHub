import * as React from "react";
import Button from "@mui/material/Button";
import "./PageNotFound.css";

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="section-container">
      <section className="warningMessage">
        <h1 className="heading">404</h1>
        <p className="oops">Oops...</p>
        <p className="text">We&apos;re sorry, but something went wrong.</p>
        <Link to="/">
          <Button variant="contained" className="btn btn-secondary orange">
            Home Page
          </Button>
        </Link>
      </section>
    </div>
  );
}
