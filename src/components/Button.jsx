import { useSelector } from "react-redux"
import { useNavigate } from "react-router"


function Button({ setOpen }) {
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate();

  return (
    <div className="bg-black/10 backdrop-blur-xs p-5 md:pl-[200px] sticky bottom-0">
      <button onClick={() => user ? setOpen(true) : navigate("/login")} className="z-5 btn flex gap-5 rounded-lg bg-gray-200 text-black border-none">
        + Give Feedback
      </button>
    </div>
  )
}
export default Button