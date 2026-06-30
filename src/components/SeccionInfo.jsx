import "./SeccionInfo.css";

import imagen1 from "../assets/libros1.jpg";
import imagen2 from "../assets/libros2.jpg";

function SeccionInfo() {
  return (
    <section className="info">

      <div className="reveal imagen1">
        <img src={imagen1} alt="Libros" />
      </div>

      <div className="reveal texto1">
        <h2>Encontrá tu próxima historia.</h2>

        <p>
Explorá un universo de libros que te esperan para sorprenderte, emocionarte y acompañarte en cada momento de tu día.
Descubrí nuevas lecturas adaptadas a tus gustos, explorá géneros que ya amás y animarte a salir de tu zona de confort con recomendaciones pensadas para vos. Guardá tus libros favoritos, armá tu propia biblioteca personal y mantené siempre a mano esas historias a las que querés volver.
Compartí reseñas, opiniones y fragmentos con una comunidad de lectores que vive la lectura con la misma pasión que vos. Conectá con personas nuevas, intercambiá recomendaciones y encontrá inspiración en lo que otros están leyendo.
Porque cada libro tiene el poder de abrir una puerta distinta, de cambiar tu forma de ver el mundo o simplemente de acompañarte en el momento justo. Solo tenés que elegir el primero… y dejarte llevar.
        </p>
      </div>

      <div className="reveal imagen2">
        <img src={imagen2} alt="Libros" />
      </div>

      <div className="reveal texto2">
        <h2>Intercambiá libros.</h2>

        <p>
Dale una nueva vida a tus libros favoritos redescubriéndolos desde otra mirada, compartiéndolos con otros lectores y encontrando en ellos nuevos significados cada vez que volvés a sus páginas.
Al mismo tiempo, explorá un mundo de nuevas historias para leer, donde cada recomendación puede convertirse en tu próxima gran lectura. Sumergite en distintos géneros, autores y universos narrativos que te invitan a viajar sin moverte del lugar.
Porque cada libro puede ser tanto un recuerdo que vuelve a cobrar vida como una puerta abierta hacia algo completamente nuevo.
        </p>
      </div>

    </section>
  );
}

export default SeccionInfo;