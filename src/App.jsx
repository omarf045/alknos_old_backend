import React from 'react';

import Landing from './landing';
import Acercade from './Acercade'
import Contactanos from './Contactanos'
import Planes from './Planes'
import Registro from './registro'
import Login from './login'
import Calculadora from './calculadora'
import Deteccion from './Deteccion'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/acercade" element={<Acercade />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/deteccion" element={<Deteccion />} />
        </Routes>
    </Router>
  ); 
}

export default App;