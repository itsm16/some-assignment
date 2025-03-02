import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios";

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://some-backend-task.onrender.com/api/feedbacks");
        setData(res.data.allFeedbacks);
        //console.log(res.data.allFeedbacks); 
      } catch (error) {
        console.error("Couldn't Fetch: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black text-white w-full flex justify-center">
      <div className="bg-black md:w-[50%] max-w-[600px] text-white p-3 overflow-y-auto main-height">
        <Card title={"Example"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere ducimus tempore quasi esse aut libero at soluta illum obcaecati rem voluptatibus, optio minima! Ea itaque voluptatum iste cum error nemo"} />
        {
          data 
          ?
          data.map(ele =>
            <Card key={ele._id} user={ele.name} title={ele.title} desc={ele.description}/>
          )
          :
          <h1>Loading</h1>
        }
      </div>
    </div>
  )
}
export default Main