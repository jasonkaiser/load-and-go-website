import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render({ url }) {
  const appHtml = renderToString(<App />);
  return { appHtml };
}
