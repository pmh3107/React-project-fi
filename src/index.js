import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

// Use createRoot from "react-dom/client" instead of "react-dom"
const root = ReactDOM.createRoot(rootElement);

// Wrap your application component with root.render
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
