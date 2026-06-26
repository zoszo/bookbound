import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        <div className="navbar-logo">
          <NavLink to="/" className="logo-link">
            <h1>BOOKBOUND</h1>
          </NavLink>
        </div>

        <div className="navbar-nav">

          <NavLink
            to="/libros"
            className={({ isActive }) =>
              isActive ? "nav-item activo" : "nav-item"
            }
          >
            Libros
          </NavLink>

          <NavLink
            to="/resenas"
            className={({ isActive }) =>
              isActive ? "nav-item activo" : "nav-item"
            }
          >
            Reseñas
          </NavLink>

          <NavLink
            to="/intercambios"
            className={({ isActive }) =>
              isActive ? "nav-item activo" : "nav-item"
            }
          >
            Intercambios
          </NavLink>

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