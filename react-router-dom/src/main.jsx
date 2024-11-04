import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'; /* Enables react page to update URL and display different pages WITHOUT URL refresh */

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap this in BrowserRouter component tags, to enable it! */}
    {/* Passes functionality of BrowserRouter into the entire webpage! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
