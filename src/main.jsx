import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

// {
//   /* The following line can be included in your src/index.js or App.js file */
// }
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cardskerala from './components/cardskerala.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />

    </BrowserRouter>
    
  </StrictMode>,
)
