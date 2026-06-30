import "./inicio.css";
import fondoBiblioteca from "../assets/biblioteca.jpg";
import { useEffect, useState } from "react";

function Inicio() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4); // velocidad parallax
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="reveal inicio" id="inicio">
      
      <div
        className="bg-parallax"
        style={{
          backgroundImage: `url(${fondoBiblioteca})`,
          transform: `translateY(${offset}px)`
        }}
      />

      <div className="overlay">
        <h1>BOOKBOUND</h1>

        <p>Un lugar donde los libros, el café y las historias se encuentran.</p>

        <div className="botones">
          <button className="btn-verde">Registrarse</button>
          <button className="btn-blanco">Iniciar sesión</button>
        </div>
      </div>
    </section>
  );
}

export default Inicio;