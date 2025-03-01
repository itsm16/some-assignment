import {useSelector} from 'react-redux'

function Nav() {
  const user = useSelector((state)=> state.user.user);

  return (
    <div className="text-white sticky top-0 w-full bg-black/10 backdrop-blur-xs h-[65px] flex items-center justify-between px-10 md:px-[200px]">
      <div className="text-xl font-semibold">Feedbacks</div>
      {user ? 
      <div onClick={()=>console.log(user)} className='w-10 bg-black capitalize rounded-[100%] border-[1px] border-gray-400/40 h-10 flex justify-center items-center'>
        {user[0]}
      </div> :
      <button className='btn bg-gray-200 rounded-lg text-black'>Login</button>
      }
      
    </div>
  )
}
export default Nav