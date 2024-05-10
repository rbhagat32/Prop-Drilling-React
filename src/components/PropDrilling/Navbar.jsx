import React from "react";
import { FaReact } from "react-icons/fa";

function Navbar({ props }) {
  return (
    <div className="container mx-auto my-8 flex justify-between border-b-2 border-black">
      <h1 className="text-2xl sm:text-3xl text-black font-bold flex mt-1">
        Prop Drilling - React
        {
          <span className="mt-1 ml-2">
            <FaReact />
          </span>
        }
      </h1>
      <div className="bg-orange-500 text-white rounded-lg mb-6 ">
        <h2 className="px-4 py-2 font-semibold">
          Favourites: {props.filter((item) => item.added === true).length}
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
