import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLenght] = useState(8)
  const [numberAllowed, setNUmberAllowed] = useState(false)
  const [sybolAllowed, setSybolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    //alert("Done")
  },[password])

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str = str + "0123456789"
    if (sybolAllowed) str = str + "!@#$%^&*-_+={}[]~`"

    for (let i = 1; i <=  length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }

    setPassword(pass)

  }, [length,numberAllowed,sybolAllowed,setPassword])

  useEffect(() => {
    passwordGen()
  },[length,numberAllowed,sybolAllowed])  
    
  

  return (
    <>
      <h1 className='text-[30px]'>Password Generater...</h1>
      <div className='w-full h-[90vh] flex items-center justify-center'>
        <div className='w-[600px] h-auto p-3'>
          <div className='w-auto h-[100px] bg-[black] flex items-center justify-center p-5 rounded-xl relative'>
            <input 
             ref={passwordRef}
              readOnly
              value={password}
              type="text" 
              name="" 
              id="" 
              className='w-full rounded-xl h-[50px] bg-[#2A2E32] p-2 text-[18px]'
            />
            <span 
              className='absolute right-10 text-[30px] cursor-pointer' 
              onClick={copyPassword}
              >&#10063;
            </span>
          </div>
          <div className='w-auto h-auto bg-[black] mt-3 p-2 rounded-xl'>
            <div className='mt-3 ml-5 mr-5'>
              <input 
                value={length}
                min={8}
                max={100}
                type="range" 
                name="" 
                id="" 
                className='w-full'
                onChange={(e) => {setLenght(e.target.value)}}
              />
              <p className='mb-2 font-[300]'>LENGTH : {length}</p>
            </div>
            <div className='text-start mt-3 ml-5'>
              <input 
                value={numberAllowed}
                type="checkbox" 
                name="" 
                id="" 
                onClick={() => {
                  setNUmberAllowed((prev) => !prev)
                }}
              /><label htmlFor=""> Include Numbers</label><br />
              <input 
                type="checkbox" 
                name="" 
                id="" 
                value={sybolAllowed}
                onClick={() => {
                  setSybolAllowed((prev) => !prev)
                }}
              /><label htmlFor=""> Include Symbols</label><br />
              {/* <input 
                type="checkbox" 
                name="" 
                id="" 
              /><label htmlFor=""> Include LowerCase</label><br />
              <input 
                type="checkbox" 
                name="" 
                id="" 
              /><label htmlFor=""> Include UpperCase</label><br /> */}
            </div>
            {/* <div className='p-3'>
              <button className='bg-[orange] p-7 pt-1 pb-1 text-[black]  text-[20px] font-bold cursor-pointer rounded-full'>Generate</button>
            </div>     */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
