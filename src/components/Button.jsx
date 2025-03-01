import { useSelector } from "react-redux"


function Button({ setOpen }) {
  const user = useSelector(state => state.user.user)

  return (
    <div className="bg-black/10 backdrop-blur-xs p-5 md:pl-[200px] sticky bottom-0">
      <button onClick={() => user ? setOpen(true) : console.log("k")} className="z-5 btn flex gap-5 rounded-lg bg-gray-200 text-black border-none">
        + Give Feedback
      </button>
    </div>
  )
}
export default Button