import { Route, Routes } from 'react-router'
import Login from './components/Login'
import Layout from './Layout'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Layout/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}
export default App