import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)




// ---------------- EJEMPLO BOTÓN:
// const ButtonCustom = ({text}) => {
//   return(
//     <button>
//       {text}
//     </button>
//   )
// }

// root.render(
//   <React.Fragment>
//     <ButtonCustom text='Me gusta'/>
//   </React.Fragment>
// )

// ---------------- ACLARACIONES: 
// React: Son funciones que entregan objetos (componentes).
// PascalCase = React.
// camelCase = JavaScript.
// snake_case.
// kebab-case.
// Para React Native se necesita añadir el CSS directamente en la etiqueta de esta forma: ejemplo > "style={{ display: 'flex'}}"
// <React.Fragment> es para cuando se desea envolver dos o más elementos en React y poder renderizarlos (puede utilizarse <> y </> también)