import { useState } from "react";

function Card({ desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere ducimus tempore quasi esse aut libero at soluta illum obcaecati rem voluptatibus, optio minima! Ea itaque voluptatum iste cum error nemo et accusamus explicabo saepe provident. Natus aperiam tempora in, minima accusantium quibusdam enim aut adipisci harum eum dolore, assumenda perferendis deleniti expedita voluptas placeat velit voluptatum voluptate eius eos quaerat. Placeat, odio dolore id error at quisquam natus magni repudiandae praesentium illo nisi et assumenda mollitia sapiente perferendis vitae voluptatum vel, reprehenderit consectetur voluptates inventore unde nobis beatae. Harum nobis voluptas, neque explicabo quia maxime odio est in magni!" }) {
  const [readMore, setReadmore] = useState(false);

  return (
    <div className="my-2 flex flex-col border border-gray-400/50 px-5 pt-3 text-left gap-2 rounded-lg">
      <div>title</div>
      <div className="h-fit">{readMore ? desc : desc.slice(0, 150)}
        <span onClick={() => setReadmore(!readMore)} className="text-gray-400 font-semibold">
          {readMore ? " ...Read Less" : " ...Read More"}
        </span></div>
      <div className="flex justify-end">- username</div>
    </div>
  );
}
export default Card;
