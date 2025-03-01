import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Providers from './Providers.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <Providers>
    <App/>
  </Providers>
)
