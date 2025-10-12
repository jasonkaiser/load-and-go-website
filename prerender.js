// prerender.js
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/App.jsx";

const routes = [
  "/",
  "/services/small-large-moves",
  "/services/packing-service",
  "/services/furniture-ad",
  "/services/express-moves",
  "/services/furniture-disposal",
  "/services/personal-contact",
  "/services/cleaning-service",
  "/rulesA",
  "/rulesB",
  "/rulesC",
];

const distDir = path.resolve("./dist");

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

async function prerender() {
  for (const route of routes) {

    const appHtml = ReactDOMServer.renderToString(<App />);

    const fileName = route === "/" ? "index.html" : route.replace(/\//g, "_") + ".html";
    const filePath = path.join(distDir, fileName);

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Load & Go</title>
    <link rel="stylesheet" href="/assets/index.css" />
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/assets/main.js"></script>
  </body>
</html>
`;

    fs.writeFileSync(filePath, htmlContent);
    console.log(`Prerendered ${route} -> ${filePath}`);
  }
}

prerender();
