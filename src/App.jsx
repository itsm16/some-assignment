import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Layout from './Layout'
import Signup from './pages/Signup'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './store/features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state=> state.user.user);
  const savedToken = localStorage.getItem("savedToken")

  useEffect(()=>{
      async function fetchUser(){
        // console.log(savedToken);
        const query = await axios.post("https://some-backend-task.onrender.com/api/user", {token: savedToken},{withCredentials: true})
        // query && localStorage.setItem("savedUser", query ? query?.data.user : null)
        // console.log(query);
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
