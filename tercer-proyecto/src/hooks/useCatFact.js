import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
    // primer estado para la primera API (facts).
    const [fact, setFact] = useState()
    
    // método que recupera nuevos datos y actualiza el estado interno.
    const refreshFact = () => {
        // recupera, resuelve y actualiza el estado.
        getRandomFact().then(newFact => setFact(newFact))
    }
    // ¡¡PRIMER EFECTO PARA RECUPERAR LA CITA AL CARGAR LA PÁGINA!!
    // es necesario utilizar useEffect para hacer un fetch de datos
    // ya que éste último no se puede colocar directo en el DOM.
    // el 'fetch' se colocó en la lógica externa 'getRandomFact' para el botón.
    useEffect(refreshFact, [])

    return { fact, refreshFact }
} 