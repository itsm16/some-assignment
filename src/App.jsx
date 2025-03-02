import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Layout from './Layout'
import Signup from './pages/Signup'
import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './store/features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state=> state.user.user);

  useEffect(()=>{
      async function fetchUser(){
        const query = await axios.get("http://localhost:3000/api/user",{withCredentials: true})
        dispatch(setUser(query.data.user))
      }
      
      fetchUser();
    },[])

  return (
    <>
    <Routes>
      <Route index element={<Layout/>}/>
      <Route path='/signup' element={user.name === null ? <Signup/> : <Navigate to={"/"}/>} />
      <Route path='/login' element={user.name === null ? <Login/> : <Navigate to={"/"}/>}/>
    </Routes>
    </>
  )
}
export default App