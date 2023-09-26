import { useState } from 'react'
import responseMovies from './mocks/with-results.json'
import './App.css'

function App () {
  // 'movies' se encuentra dentro de 'responseMovies' en la parte de 'search' (en el archivo json)
  const movies = responseMovies.Search
  // tiene películas cuando 'movies' tiene un length mayor a cero.
  const hasMovies = movies?.length > 0

  // es necesario crear un formulario con un botón de búsqueda.
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input placeholder="Avengers, Star Wars, The Matrix..." />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
            )
          : (
            <p>No se encontraron películas para esta búsqueda</p>
            )
        }
      </main>
    </div>
  )
}

export default App
