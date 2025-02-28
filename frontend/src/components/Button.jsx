

function Button({ setOpen }) {
  return (
    <div className="bg-black/10 backdrop-blur-xs p-5 md:pl-[200px] sticky bottom-0">
      <button onClick={() => setOpen(true)} className="z-5 btn flex gap-5 rounded-lg bg-gray-300 text-black border-none">
        + Give Feedback
      </button>
    </div>
  )
}
export default Button