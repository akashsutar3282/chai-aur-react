
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("green");

  return (
    // this div has full screen
    <div className='w-screen h-screen duration-200' style={{ backgroundColor: color }}>
      {/* this div is for bottom line */}
      <div className='fixed flex flex-wrap justify-center  inset-y-0 right-12 w-16 py-8'>
        {/* this div is for out of button div */}
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* this is button */}
          <button className='outline-none p-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>

          <button className='outline-none p-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>

          <button className='outline-none p-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>

          <button className='outline-none p-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>

          <button className='outline-none p-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>Gray</button>

          <button className='outline-none p-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>

          <button className='outline-none p-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>

          <button className='outline-none p-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>

          <button className='outline-none p-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>Lavender</button>

          <button className='outline-none p-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>White</button>

        </div>
      </div>
    </div>

  )
}

export default App
