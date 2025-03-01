import { useState } from "react"
import Nav from './components/Nav'
import Main from './components/Main'
import Button from './components/Button'
import Toast from './components/Toast'
import Modal from './components/Modal'

function Layout() {
    const [open, setOpen] = useState(false)
    const [toast, setToast] = useState(null)

    return (
        <>
            <Nav/>
            <Main />
            <Button open={open} setOpen={setOpen} />
            <Modal open={open} setOpen={setOpen} setToast={setToast} />
            <Toast toast={toast} setToast={setToast} />
            {/* <button onClick={()=> console.log(toast)} className="btn">k</button> */}
        </>
    )
}
export default Layout