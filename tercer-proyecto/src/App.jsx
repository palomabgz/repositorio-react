import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'

// es mejor colocar las APIs en constantes como buena práctica.
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

//  dentro de la función 'app' se separó todo en dos 'Custom Hooks' que trabajan en conjunto y por separado también.
export function App () {
  // dejamos arriba la constante de 'fact' debido a que la de abajo depende de él para cambiar.
  const { fact, refreshFact } = useCatFact()
  // pasamos el 'Custom Hook' dentro de la App.
  const { imageUrl } = useCatImage({ fact })

  // en caso de fallar la request de respuesta.
  // const [factError, setFactError] = useState()

      // si no hay '[]', el efecto se ejecutará cada vez que se renderiza el componente (loop infinito).
      // si hay '[]', el efecto se ejecutará una primera vez nada más.
      // si hay '[]' con dependencias dentro, el efecto se ejecutará la primera vez que se renderice
      // el componente y cada vez que el valor de 'setFact' cambie. 

  const handleClick = async () => {
    // de esta forma permitimos actualizar el estado interno del 'Custom Hook'.
    refreshFact()
  }

  return (
    // con el 'return' lo que hacemos es devolver la información para visualizar.
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using 
      the first three words for ${fact}`} />}

      <Otro />
    </main>

    // utilizamos un 'alt' que explique bien de dónde sale la imagen.
    // 'Otro' es un componente nuevo que puede añadirse al código de manera independiente.
  )
}

// es sumamente necesario dejar el ', [])' fuera del fetch pues pertenece
// a las dependencias del useEffect.