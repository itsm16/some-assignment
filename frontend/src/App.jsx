import { useState } from "react"
import Button from "./components/Button"
import Main from "./components/Main"
import Modal from "./components/Modal"
import Nav from "./components/Nav"


function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Nav/>
    <Main/>
    <Button open={open} setOpen={setOpen}/>
    <Modal open={open} setOpen={setOpen}/>
    </>
  )
}

export default App
