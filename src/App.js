import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/inicio/Inicio'
import Linguagens from './paginas/linguagens/Linguagens'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Linguagens" element={<Linguagens />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
