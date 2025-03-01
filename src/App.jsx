import { useState } from "react"
import Button from "./components/Button"
import Main from "./components/Main"
import Modal from "./components/Modal"
import Nav from "./components/Nav"
import Toast from "./components/Toast"


function App() {
  
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);
  return (
    <>
    <Nav/>
    <Main/>
    <Button open={open} setOpen={setOpen}/>
    <Modal open={open} setOpen={setOpen} setToast={setToast}/>
    <Toast toast={toast} setToast={setToast}/>
    {/* <button onClick={()=> console.log(toast)} className="btn">k</button> */}
    </>
  )
}

export default App
