import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router';

function Nav() {
  const user = useSelector((state)=> state.user.user);
  const name = user.name;
  const navigate = useNavigate();

  return (
    <div className="text-white sticky top-0 w-full bg-black/10 backdrop-blur-xs h-[65px] flex items-center justify-between px-10 md:px-[200px]">
      <div className="text-xl font-semibold">Feedbacks</div>
      {name !== null ? 
      <div className="hover:hover-tooltip-open cursor-pointer tooltip tooltip-bottom w-10 bg-black capitalize rounded-[100%] border-[1px] border-gray-400/40 h-10 flex justify-center items-center"
        data-tip={user.name !== null ? `${name}` : ""}
      >
        {name && name[0]}
      </div> :
      <button onClick={()=>navigate("/login")} className='btn bg-gray-200 rounded-lg text-black'>Login</button>
      }
      
    </div>
  )
}
export default Nav
