import { useState } from 'react';
import './App.css'

// React: One Way Binding: Estado --> UI
// Angular/Vue: Two Way Binding: UI <---> Estado

function App() {
  console.log('renderizando App');

  const [counter, setCounter] = useState(0);

  // Sin destructuring
  // const array = useState(0);
  // const counter = array[0]; // Posición 0: Valor actual del estado
  // const setCounter = array[1]; // Posición 1: Fn para actualizar el estado
  
  function handleClick() {
    console.log('Ejecutando función handleClick');
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={handleClick}>Click!</button>
    </>
  )
}

export default App