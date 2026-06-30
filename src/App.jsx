import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

// Navbars
import Navbar_Publica from './components/Navbar_Publica'
import Navbar_Privada from './components/Navbar_Privada'

// Inicio
import Inicio from "./components/inicio";
import Libros from './components/Libros'
import SeccionInfo from './components/SeccionInfo'
import Contacto from './components/Contacto'

// Login y Registro
import login from './pages/login'
import registro from './pages/registro'

// Zona privada
import Libros_pag from './pages/Libros_pag'
import Resenas from './pages/Resenas'
import Intercambios from './pages/Intercambios'

function App() {
  const [seccionActiva, setSeccionActiva] = useState('libros')
  
    const handleSeccionChange = (seccion) => {
      setSeccionActiva(seccion)
    }


  // 🎬 ANIMACIÓN SCROLL LIMPIA
    useEffect(() => {
      const elements = document.querySelectorAll(".reveal");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        {
          threshold: 0.15,
        }
      );
  
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
  return (
    <Routes>

      {/* Inicio */}
      <Route
        path="/"
        element={
          <>
            <Navbar_Publica />
            <Inicio />
            <Libros />
            <SeccionInfo />
            <Contacto />
          </>
        }
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={
          <>
            <Navbar_Publica />
            <login />
          </>
        }
      />

      {/* REGISTRO */}
      <Route
        path="/registro"
        element={
          <>
            <Navbar_Publica />
            <registro />
          </>
        }
      />

      {/* LIBROS */}
      <Route
        path="/libros"
        element={
          <>
            <Navbar_Privada />
            <Libros_pag />
          </>
        }
      />

      {/* RESEÑAS */}
      <Route
        path="/resenas"
        element={
          <>
            <Navbar_Privada />
            <Resenas />
          </>
        }
      />

      {/* INTERCAMBIOS */}
      <Route
        path="/intercambios"
        element={
          <>
            <Navbar_Privada />
            <Intercambios />
          </>
        }
      />

    </Routes>
  )
}

export default App