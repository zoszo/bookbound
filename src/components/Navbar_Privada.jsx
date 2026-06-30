import { NavLink } from 'react-router-dom'
import './Navbar_Privada.css'

function Navbar_Privada() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        <div className="navbar-logo">
          <NavLink to="/" className="navbar-logo-link">
            <h1>BOOKBOUND</h1>
          </NavLink>
        </div>

        <div className="navbar-nav">

          <NavLink
            to="/Libros_pag"
            className={({ isActive }) =>
              isActive ? "nav-item activo" : "nav-item"
            }
          >
            Libros
          </NavLink>

          <NavLink
            to="/Resenas"
            className={({ isActive }) =>
              isActive ? "nav-item activo" : "nav-item"
            }
          >
            Reseñas
          </NavLink>

          <NavLink
            to="/Intercambios"
            className={({ isActive }) =>
              isActive ? "nav-item activo" : "nav-item"
            }
          >
            Intercambios
          </NavLink>

        </div>

        <button
          className="btn-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <UserPanel abierto={menuAbierto} />

      </div>
    </nav>
  )
}

export default Navbar_Privada