import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Components/AuthContext";
import "./sass/main.scss";

const rootElement = document.getElementById("root");

// Use createRoot from "react-dom/client" instead of "react-dom"
const root = ReactDOM.createRoot(rootElement);

// Wrap your application component with root.render
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
