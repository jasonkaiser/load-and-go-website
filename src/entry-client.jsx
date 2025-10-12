import React from 'react'
import { hydrate } from 'vite-plugin-ssr/client/react'
import App from './App.jsx'
import './index.css'
import './fonts.css'

hydrate(<App />)
