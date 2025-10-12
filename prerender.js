import { render } from './src/entry-server.jsx'
import fs from 'fs'
import path from 'path'

const routes = [
  '/',
  '/services/small-large-moves',
  '/services/packing-service',
  '/services/furniture-ad',
  '/services/express-moves',
  '/services/furniture-disposal',
  '/services/personal-contact',
  '/services/cleaning-service',
  '/rulesA',
  '/rulesB',
  '/rulesC',
]

const distDir = path.resolve(__dirname, 'dist')

async function prerender() {
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })

  for (const route of routes) {
    const { appHtml } = await render({ url: route })
    const fileName = route === '/' ? 'index.html' : route.replace(/\//g, '_') + '.html'
    const filePath = path.join(distDir, fileName)

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Load & Go</title>
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/src/entry-client.jsx"></script>
  </body>
</html>
`

    fs.writeFileSync(filePath, htmlContent)
    console.log(`Prerendered ${route} -> ${filePath}`)
  }
}

prerender()
