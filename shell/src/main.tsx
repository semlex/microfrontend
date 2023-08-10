import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { StoreProvider } from './components/StoreProvider'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app'),
)
