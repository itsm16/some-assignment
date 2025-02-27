
import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import FeedbackBtn from './components/FeedbackBtn.js'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Nav/>
      <Main/>
      <FeedbackBtn/>
    </>
  )
}

export default App
