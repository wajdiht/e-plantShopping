
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter } from 'react-router-dom'  // Import BrowserRouter for routing

// GitHub Pages deployment: set basename to the repo name
const basename = '/<e-plantShopping>';  // Replace <repository-name> with your repo's name

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap the App with BrowserRouter and set basename */}
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
