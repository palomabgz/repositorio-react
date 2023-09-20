import { useEffect, useState } from 'react'
import './App.css'

// es mejor colocar las APIs en constantes como buena práctica.
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
// utilizzamos esta lógica debido a que la variable puede cambiar y así sólo cambiar el url.
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App () {
  // primer estado para la primera API (facts).
  const [fact, setFact] = useState()

  // segundo estado para la segunda API (imagen).
  const [imageUrl, setImageUrl] = useState()

  // en caso de fallar la request de respuesta.
  const [factError, setFactError] = useState()

  // ¡¡PRIMER EFECTO PARA RECUPERAR LA CITA AL CARGAR LA PÁGINA!!
  // es necesario utilizar useEffect para hacer un fetch de datos
  // ya que éste último no se puede colocar directo en el DOM.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    // se utilizan dos .then para concatenar promesas.
    // [ej. fetch > devuelve una promesa > primer '.then' > res.json > devuelve otra promesa > segundo '.then con setFact'].
      .then(res => {

// lógica de return en caso de que falle la request de respuesta.
        // if (!res.ok) {
        //   setFactError('No se ha podido recuperar la cita')
        // }

        return res.json()
      })
      .then(data => {
        // se recupera el hecho (ligado al primer usesState).
        const { fact } = data
        setFact(fact)
      })
      // si no hay '[]', el efecto se ejecutará cada vez que se renderiza el componente (loop infinito).
      // si hay '[]', el efecto se ejecutará una primera vez nada más.
      // si hay '[]' con dependencias dentro, el efecto se ejecutará la primera vez que se renderice
      // el componente y cada vez que el valor de 'setFact' cambie.
  }, []) 


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

  return (
    // con el 'return' lo que hacemos es devolver la información para visualizar.
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using 
      the first three words for ${fact}`} />}
    </main>

    // utilizamos un 'alt' que explique bien de dónde sale la imagen.
    // CAT_PREFIX_IMAGE_URL se utiliza para no añadir info de más en el setImageUrl.
  )
}

// podría ser posible añadir un <button onClick={handleClick}></button> y 
// estar ligado a una funcion 'const' con el nombre 'handleClick' y dentro
// de ella llevar el código del primer useEffect [es decir, el fetch].
// es sumamente necesario dejar el ', [])' fuera del fetch pues pertenece
// a las dependencias del useEffect.