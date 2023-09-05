import React, { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);

const handleMinus = () => {
  setCounter(counter => counter - 1);
}

const handlePlus = () => {
  setCounter(counter + 1);
  console.log(counter);
}
  return (
    <>
        <div className="max-w-sm rounded overflow-hidden bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">The Temperature Counter</div>
          <div className="flex items-center mx-auto content-center text-gray-700 text-white w-40 h-40 border-black px-8 py-8 border-solid border-2 border-white-500">
            <p className='mx-auto text-3xl text-black'>{counter} <span>&#8451;</span></p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 me-3 rounded" onClick={handleMinus}>
            -
          </button>
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePlus} >
            +
          </button>
        </div>
      </div>

    </>
  )
}

export default App
