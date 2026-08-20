import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="create">

  <h1>createRoot function and rendering it</h1>
  </div>


  <myelement />
    <App />
   
  </StrictMode>,
)
