import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'material-icons'

import 'materialize-css/dist/css/materialize.min.css'; // Importar estilos de Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; // Importar scripts de Materialize JS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
