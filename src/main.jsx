// src/main.jsx
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts.css";

const isSSG = typeof window === "undefined";

if (!isSSG) {
  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

export const createApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
);
