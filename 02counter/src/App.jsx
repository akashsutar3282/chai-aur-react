import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0);



  const addValue = () => {
    if (counter >= 10) setCount(counter);
    else setCount(counter + 1);
  }

  const removeValue = () => {
    if (counter <= 0) setCount(counter);
    else setCount(counter - 1);
  }
  return (
    <>
      <h2>Counter App</h2>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
