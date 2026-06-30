import "./Libros.css";
import imagenLibros from "../assets/libros1.jpg";

function Libros() {
  return (
    <section className="libros" id="libros">

      <div className="libros-imagen">

<img
  src={imagenLibros}
  alt="Libros"
/>

      </div>

      <div className="libros-texto">

        <span>NUESTRA COMUNIDAD</span>

        <h2>
          Descubrí nuevos
          <br />
          libros todos
          <br />
          los días.
        </h2>

        <p>
          En BookBound creemos que cada libro merece un nuevo lector.
          Compartí recomendaciones, descubrí historias y conectate con
          personas que disfrutan la lectura tanto como vos.
        </p>

        <button>Explorar colección</button>

      </div>

    </section>
  );
}

export default Libros;