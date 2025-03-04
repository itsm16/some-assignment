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

  useEffect(()=>{
    const savedToken = localStorage.getItem("savedToken")
      async function fetchUser(){
        // console.log(savedToken);
        const query = await axios.post("http://localhost:3000/api/user", {token: savedToken},{withCredentials: true})
        // query && localStorage.setItem("savedUser", query ? query?.data.user : savedToken)
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