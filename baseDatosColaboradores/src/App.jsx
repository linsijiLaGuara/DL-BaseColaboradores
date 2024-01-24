import { useState } from 'react'
import Formulario from './components/Formulario'
import {BaseColaboradores} from './BaseColaborades'
import './App.css'

function App() {
  const [listaNombres, setListaNombres] = useState(BaseColaboradores)

  return (
    <>
   
   <Formulario />
    </>
  )
}

export default App
