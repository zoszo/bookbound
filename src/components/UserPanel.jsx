import "./UserPanel.css";
import {
  FaUserCircle,
  FaBookmark,
  FaCog,
  FaUsers,
  FaCommentDots,
  FaSignOutAlt
} from "react-icons/fa";

function UserPanel({ abierto }) {
  return (
    <div className={`user-panel ${abierto ? "mostrar" : ""}`}>

      <button className="panel-btn">
        <span>Ver perfil</span>
        <FaUserCircle />
      </button>

      <button className="panel-btn">
        <span>Guardados</span>
        <FaBookmark />
      </button>

      <button className="panel-btn">
        <span>Configuración</span>
        <FaCog />
      </button>

      <button className="panel-btn">
        <span>Comunidad</span>
        <FaUsers />
      </button>

      <button className="panel-btn">
        <span>Contáctanos</span>
        <FaCommentDots />
      </button>

      <button className="panel-btn">
        <span>Cerrar sesión</span>
        <FaSignOutAlt />
      </button>

    </div>
  );
}

export default UserPanel;