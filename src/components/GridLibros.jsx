import './GridLibros.css'
import { useState, useEffect } from "react";
import CardLibro from "./CardLibro";
function GridLibros({ libros }) {
    return (
        <div className="grid-libros">
            {libros.map((libro) => (
                <CardLibro
                    key={libro.id}
                    libro={libro}
                />
            ))}
        </div>
    );
}    
    export default GridLibros;