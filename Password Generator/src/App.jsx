import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [isnum, setIsnum] = useState(false);
  const [ischar, setIschar] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (isnum) s += "1234567890";
      if (ischar) s += "!@#$%^&*(){}[]<>?/\|";
      console.log(s);
      for (let i = 1; i <= length; i++) {
        const j = Math.floor(Math.random() * s.length);
        pass += s[j];
      }
      setPassword(pass);
    },
    [length, isnum, ischar, setPassword],
  )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //keep this on
    passwordRef.current?.setSelectionRange(0, 101); //only 7 characters will be selected
    window.navigator.clipboard.writeText(password)
    alert("The Generated password was copied to Clipboard: Use ctrl+v to paste")
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [ischar, isnum, length, passwordGenerator])


  return (
    <>

      <div className=' bg-slate-700'>

        <h1 className='heading font-semibold text-black bg-green-500 hover:bg-green-400 active:scale-105 w-fit mx-auto my-2 px-3 py-2 rounded-xl shadow-lg hover:shadow-yellow-100 transition-all duration-500 hover:cursor-pointer' onClick={() => { passwordGenerator() }}>Password Generator</h1>
        <div className='bg-gray-500 my-4 w-[80vw] px-6 py-2 mx-auto rounded-xl'>
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder='Password'
              className='rounded-s-md w-[60vw] p-2 text-black overflow-visible text-xl font-semibold'
              value={password}
              readOnly // add this value to prevent etite
              ref={passwordRef}
            />
            <input
              type="button"
              id='copyElement'
              value="Copy"
              className='bg-yellow-300 font-semibold text-black p-2 rounded-e-md hover:cursor-pointer hover:bg-yellow-400 active:scale-105'
              onClick={() => { copyPasswordToClipboard(); }}

            />
          </div>
          <div className='mt-10 md:flex md:justify-center text-xl'>
            <div className='box '>
              <input
                type="range"
                id='Length'
                value={length}
                min={10}
                max={50}
                className='slider hover:cursor-pointer'
                onChange={(e) => { setLength(Number(e.target.value)) }}
              />
              <label>Length ({length})</label>
            </div>

            <div className='box'>
              <input
                type="checkbox"
                id='Number'
                className='mx-3 hover:cursor-pointer'
                defaultChecked={isnum}
                onChange={(e) => { setIsnum(!isnum) }}
              />
              <label >Number</label>
            </div>
            <div className='box'>
              <input
                type="checkbox"
                id='Character'
                className='mx-3 hover:cursor-pointer'
                defaultChecked={ischar}
                onChange={(e) => { setIschar(!ischar) }}
              />
              <label >Character</label>
            </div>
          </div>
        </div>
      </div>
        {/* Final DOM COntent Loading 825ms
            Finished in 2.49s
          */}
    </>
  )
}

export default App
