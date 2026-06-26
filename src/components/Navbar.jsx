import { useState } from 'react'
import './Navbar.css'

function Navbar({ onSeccionChange }) {
  const [seccionActiva, setSeccionActiva] = useState('libros')

  const handleClick = (seccion) => {
    setSeccionActiva(seccion)
    onSeccionChange(seccion)
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h1>BOOKBOUND</h1>
        </div>

        <div className="navbar-nav">
          <button 
            className={`nav-item ${seccionActiva === 'libros' ? 'activo' : ''}`}
            onClick={() => handleClick('libros')}
          >
            Libros
          </button>
          <button 
            className={`nav-item ${seccionActiva === 'reseñas' ? 'activo' : ''}`}
            onClick={() => handleClick('reseñas')}
          >
            Reseñas
          </button>
          <button 
            className={`nav-item ${seccionActiva === 'intercambios' ? 'activo' : ''}`}
            onClick={() => handleClick('intercambios')}
          >
            Intercambios
          </button>
        </div>

        <button className="btn-menu" aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar