import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Find the root element in the HTML
const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

// Create a React root
const root = createRoot(container);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
