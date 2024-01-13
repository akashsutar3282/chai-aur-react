import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  let obj = {
    fName: "firstName",
    age: 20
  }
  let arr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-green-400 p-4 text-white rounded-md mb-6'>Akash</h1>
      <Card userName="Akash" btnText='Click me' />
      <Card userName="S.S" />
    </>
  )
}

export default App
