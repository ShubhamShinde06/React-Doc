import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("#242424")

  return (
    <>
      <div className='w-full h-[90vh] flex items-end justify-center pb-5' style={{backgroundColor : color}}>
        <div className='w-[60%] h-[80px] bg-[white] p-3 rounded-2xl flex justify-between items-center gap-4'>
          <button className='w-[100px] h-[50px] bg-[red] rounded-lg cursor-pointer' onClick={() => setColor("red")}></button>
          <button className='w-[100px] h-[50px] bg-[green] rounded-lg cursor-pointer' onClick={() => setColor("green")}></button>
          <button className='w-[100px] h-[50px] bg-[yellow] rounded-lg cursor-pointer' onClick={() => setColor("yellow")}></button>
          <button className='w-[100px] h-[50px] bg-[orange] rounded-lg cursor-pointer' onClick={() => setColor("orange")}></button>
          <button className='w-[100px] h-[50px] bg-[black] rounded-lg cursor-pointer' onClick={() => setColor("black")}></button>
          <button className='w-[100px] h-[50px] bg-[blue] rounded-lg cursor-pointer' onClick={() => setColor("blue")}></button>
          <button className='w-[100px] h-[50px] bg-[pink] rounded-lg cursor-pointer' onClick={() => setColor("pink")}></button>
        </div>
      </div>
    </>
  )
}

export default App
