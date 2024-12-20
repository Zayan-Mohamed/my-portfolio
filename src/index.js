import React from 'react'
import { createRoot } from 'react-dom/client' // Updated import for React 18+
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import ErrorBoundary from './ErrorBoundary'

const root = createRoot(document.getElementById('root')) // Create a root for the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
