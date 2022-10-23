import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from "./components/Footer/Footer"

import Promociones from './pages/Promociones/Promociones'
import Destinos from './pages/Destinos/Destinos'
import Informacion from './pages/Informacion/Informacion'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
     <Nav></Nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/promociones' element={<Promociones/>}></Route>
        <Route path='/destinos' element={<Destinos/>}></Route>
        <Route path='/info' element={<Informacion/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </HashRouter>
  </React.StrictMode>
)
