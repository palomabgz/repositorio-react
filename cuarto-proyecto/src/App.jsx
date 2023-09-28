import { useState } from 'react'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App () {
  const { movies: mappedMovies } = useMovies()

  // NUEVO HOOK POSIBLE DE USAR: 'useRef'.
  // hook que permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente.
  // útil para guardar cualquier valor mutable [ej. un contador] que cada vez que cambia no renderiza el componente.
  // por lo que es distinto al 'useState' ya que en éste se renderiza el componente cada vez que cambia.  
  // recuperamos los datos desde el 'event' que lo recibe a través del 'target' (que es el propio formulario).
  // utilizamos JavaScript Vanilla para no depender de React.
  // gestionamos los datos de manera 'descontrolada' es decir que el formulario se gestiona a través del DOM.
  // en caso de querer hacerlo de manera 'controlada', se debe usar un useState (pero es más lento).
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new window.ForData(event.target)
    const query = data.get('query')
  }

  // es necesario crear un formulario con un botón de búsqueda.
  // en el 'ul' se hace llamado a los objetos dentro de los '{}' para obtener la info.
  // se usa ID del array [en este caso de 'movie'] como buena práctica y no el 'indice' del mismo.
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder="Avengers, Star Wars, The Matrix..." />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
