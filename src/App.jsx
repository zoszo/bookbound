import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Libros from './pages/Libros'
import Resenas from './pages/Resenas'
import Intercambios from './pages/Intercambios'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/reseñas" element={<Resenas />} />
        <Route path="/intercambios" element={<Intercambios />} />
      </Routes>
    </>
  )
}

export default App