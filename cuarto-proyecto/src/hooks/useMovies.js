import responseMovies from '../mocks/with-results.json'

// creación de un 'Custom Hook' que se ocupará del fetch de datos, estado, etcétera.
export function useMovies () {
    // 'movies' se encuentra dentro de 'responseMovies' en la parte de 'search' (en el archivo json)
    const movies = responseMovies.Search

    // mappeo de los datos de las 'movies' (permite que nosotros controlemos la lógica independientemente de la API)
    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}