import { useEffect, useState } from 'react'


// utilizzamos esta lógica debido a que la variable puede cambiar y así sólo cambiar el url.
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

// utilizamos un 'Custom Hook' para extraer la lógica de la imagen y volverla reutilizable.
// es importante comenzar la función con la palabra 'use'.
// no puede estar dentro de un 'if', 'while' y tiene que ser llamado dentro del cuerpo del componente.

// es buena práctica utilizar un objeto [es decir la palabra entre '{}'] dentro de los '()' en una función debido a mayor extencibilidad del mismo. 
export function useCatImage ( { fact }) {
    // segundo estado para la segunda API (imagen).
    const [imageUrl, setImageUrl] = useState()

    // ¡¡SEGUNDO EFECTO PARA RECUPERAR LA IMAGEN AL TENER UNA CITA!!
    useEffect(() => {
      // es necesario controlar con un 'if' a 'fact' que inicialmente es 'null'.
      // se utiliza la opción '!fact' ya que es la opción más corta.
        if (!fact) return

      // recuperar la o las palabras.
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
      // el '.split' devuelve un array con muchas posiciones y divide la cadena de texto con separadores.
      // el '.slice' permite escoger la cantidad de palabras en las cuales posicionarse [ej. de la 0 a la 3].
      // el '.join' une nuevamente las palabras en una cadena de texto o string.

      // en el caso de no querer utilizar todo lo anterior, con el '.split' puede utilizarse
      // un segundo parámetro en dónde se le indica hasta qué palabra quedarse.[ej. .split(' ', 3)]
    console.log(threeFirstWords)

      // fetching de datos con la segunda API.
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          // se recupera la url (ligado al segundo usesState).
        const { url } = response
          // es necesario añadir el prefijo o prefijar la imagen para visualizar la imagen.
        setImageUrl(url)
        })
        // en las dependencias especificamos el 'fact' porque cada vez que este acmbie
        // debe ejecutar el segundo efecto.
    }, [fact])

        // concatenamos lógica de cada 'Custom Hook'.
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}