import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import App from './App'
import Submit from './pages/Submit'

import './index.css'

import {
  ThemeProvider,
} from './context/ThemeContext'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
          />

          <Route
            path="/submit"
            element={<Submit />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
