import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [seccionActiva, setSeccionActiva] = useState('libros')

  const handleSeccionChange = (seccion) => {
    setSeccionActiva(seccion)
  }

  return (
    <div>
      <Navbar onSeccionChange={handleSeccionChange} />
      
      {/* Aquí va el contenido según la sección activa */}
      {seccionActiva === 'libros' && <div>Contenido de Libros</div>}
      {seccionActiva === 'reseñas' && <div>Contenido de Reseñas</div>}
      {seccionActiva === 'intercambios' && <div>Contenido de Intercambios</div>}
    </div>
  )
}

export default App