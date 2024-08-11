import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const Add = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    //setCount(count + 1)
  }

  const Remove = () => {
    setCount(count - 1)
    if (count == 0) {
      location.reload();
    }
  }

  return (
    <>
      <h1>Hello i'am Coder</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={Add}>Add Value</button>
      <br /><br />
      <button onClick={Remove}>Remove Value</button>
    </>
  )
}

export default App
