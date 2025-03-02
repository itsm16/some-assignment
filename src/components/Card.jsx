import { useState } from "react";

function Card({ title = "Excellent", desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere ducimus tempore quasi esse aut libero at soluta illum obcaecati rem voluptatibus, optio minima! Ea itaque voluptatum iste cum error nemo et accusamus explicabo saepe provident. Natus aperiam tempora in, minima accusantium quibusdam enim aut adipisci harum eum dolore, assumenda perferendis deleniti expedita voluptas placeat velit voluptatum voluptate eius eos quaerat. Placeat, odio dolore id error at quisquam natus magni repudiandae praesentium illo nisi et assumenda mollitia sapiente perferendis vitae voluptatum vel, reprehenderit consectetur voluptates inventore unde nobis beatae. Harum nobis voluptas, neque explicabo quia maxime odio est in magni!", user }) {
  const [readMore, setReadmore] = useState(false);

  return (
    <div className="my-2 flex flex-col border bg-gray-900/70 border-gray-400/30 px-5 pb-2 pt-3 text-left gap-1 rounded-lg">
      <div className="font-semibold">{title}</div>
      <div onDoubleClick={() => setReadmore(!readMore)} className="cursor-pointer h-fit text-sm">{readMore ? desc : desc.slice(0, 150)}

        {
          (desc.length != 0 && desc.length > 150) &&
          <span onClick={() => setReadmore(!readMore)} className="text-gray-400 font-semibold cursor-pointer">
            {readMore ? " ...Read Less" : " ...Read More"}
          </span>
        }
      </div>
      {user && <div className="flex justify-end text-xs font-semibold">- {user}</div>}
    </div>
  );
}
export default Card;
