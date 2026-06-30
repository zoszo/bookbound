import { useState, useEffect } from "react";
import "./Navbar_Publica.css";
import UserPanel from "./UserPanel";

function Navbar_Publica() {
  const [scroll, setScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const cambiarColor = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", cambiarColor);
    return () => window.removeEventListener("scroll", cambiarColor);
  }, []);

  const irASeccion = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const irALogin = () => {
    document.getElementById("login")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const irARegistro = () => {
    document.getElementById("registro")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={scroll ? "navbar activo" : "navbar"}>
      <div className="navbar-content">

        {/* LOGO */}
        <div className="navbar-logo">
          <h1 onClick={() => irASeccion("inicio")}>
            BOOKBOUND
          </h1>
        </div>

        {/* NAV CENTRAL */}
        <div className="navbar-nav">
          <button className="nav-item" onClick={() => irASeccion("inicio")}>
            Inicio
          </button>

          <button className="nav-item" onClick={() => irASeccion("libros")}>
            Libros
          </button>

          <button className="nav-item" onClick={() => irASeccion("contacto")}>
            Contacto
          </button>
        </div>

        {/* BOTONES LOGIN / REGISTRO (LOS IMPORTANTES) */}
        <div className="auth-top">
          <button className="auth-mini" onClick={irARegistro}>
            Registrarse
          </button>

          <button className="auth-mini outline" onClick={irALogin}>
            Iniciar sesión
          </button>
        </div>

        {/* HAMBURGUESA */}
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
  );
}

export default Navbar_Publica;