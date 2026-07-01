import './Libros_pag.css'
import { useState, useEffect } from "react";
import GridLibros from "../components/GridLibros";
import CardLibro from "../components/CardLibro";


function Libros_pag() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/libros")
            .then((respuesta) => respuesta.json())
            .then((datos) => setLibros(datos))
            .catch((error) => console.error(error));
    }, []);

    {console.log(libros)}   
    return (
        <div className="libros-pag">
            <GridLibros libros={libros} />
            
        </div>
    )
}

export default Libros_pag