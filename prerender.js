// prerender.js
import { build } from 'vite-ssg'
import { createApp } from './src/main.jsx'

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
  '/rulesC'
]

build(createApp, { routes })
  .then(() => console.log('Prerender complete!'))
  .catch(err => console.error(err))
