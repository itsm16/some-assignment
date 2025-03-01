import Card from "./Card"

function Main() {
  return (
    <div className="bg-black text-white w-full flex justify-center">
      <div className="bg-black md:w-[50%] max-w-[600px] text-white p-3 overflow-y-auto main-height">
      <Card  desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere ducimus tempore quasi esse aut libero at soluta illum obcaecati rem voluptatibus"}/>
      <Card title="Worst" desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere ducimus tempore quasi esse aut libero at soluta illum obcaecati rem voluptatibus, optio minima! Ea itaque voluptatum iste cum error nemo"}/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}
export default Main