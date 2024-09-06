import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Todo from './pages/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo></Todo>
    </>
  )
}

export default App
