import './CardLibro.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CardLibro({ libro }) {
    const navigate = useNavigate();
    return (
        <div className="card-libro" 
        onClick={() => navigate(`/libros/${libro.id}`)}>
            
            <img
                src={libro.portada}
                alt={libro.titulo}
                className="portada-libro"
            />

            <div className="overlay">
                <h3>{libro.titulo}</h3>
            </div>

        </div>
    );
}

export default CardLibro;