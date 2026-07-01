import "./LibroDetalle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LibroDetalle() {
    const [libro, setLibro] = useState(null);
    const { id } = useParams();
    
    return (
        <h1>Detalle del libro</h1>
    );
}

export default LibroDetalle