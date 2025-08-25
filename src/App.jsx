import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CounterClass from './Counterclass'
import CounterFn from './CounterFn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterClass/>
      <CounterFn/>
    </>
  )
}

export default App
