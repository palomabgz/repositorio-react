const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// lógica extraída del código para más orden.
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

// OTRA OPCIÓN PARA ESCRIBIR LA FUNCIÓN DE ARRIBA:
// const getRandomFact = () => {
//     fetch(CAT_ENDPOINT_RANDOM_FACT)
//     // se utilizan dos .then para concatenar promesas.
//     // [ej. fetch > devuelve una promesa > primer '.then' > res.json > devuelve otra promesa > segundo '.then con setFact'].
//     .then(res => {

// // lógica de return en caso de que falle la request de respuesta. - falta el 'catch'.
//         // if (!res.ok) {
//         //   setFactError('No se ha podido recuperar la cita')
//         // }

//         return res.json()
//     })
//     .then(data => {
//         // se recupera el hecho (ligado al primer usesState).
//         const { fact } = data
//         setFact(fact)
//     })
// }