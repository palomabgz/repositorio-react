function ListOfMovies ( { movies }) {
    return (
        <ul>
        {
            movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
                ))
            }
        </ul>
        )
    }

function NoMoviesResult () {
    return (
        <p>No se encontraron peliculas para esta búsqueda</p>
    )
}

export function Movies ( { movies }) {
    // aparecen películas cuando 'movies' tiene un length mayor a cero.
    // lógica que decide qué componente se va a renderizar.
    const hasMovies = movies?.length > 0

    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
}