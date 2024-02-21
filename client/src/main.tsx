import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import router from "./router";
import "./main.css";
import { AuthProvider } from "./contexts/AuthContext";

render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        {router}
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);