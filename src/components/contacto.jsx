import "./Contacto.css";
import fondo3 from "../assets/fondo3.jpg";

function Contacto() {
  return (
    <section
      className="reveal contacto"
      style={{ backgroundImage: `url(${fondo3})` }}
    >
      <div className="overlay-contacto">

        <h2>CONTACT</h2>

        <div className="datos">

          <div className="dato">

            <span>&gt; E-Mail</span>

            <h3>bookbound@gmail.com</h3>

          </div>

          <div className="dato">

            <span>&gt; Instagram</span>

            <h3>@bookbound</h3>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacto;