import React, { useState } from "react";

function StateArr() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  const handleClick = () => {
    setVal(() => val.filter((elem, idx) => idx != val.length - 1));
  };

  return (
    <div className="text-center">
      {val.map((elem, idx) => {
        return (
          <h1 key={idx} className="mb-1">
            {elem}
          </h1>
        );
      })}
      <button
        onClick={handleClick}
        className="uppercase px-8 py-3 rounded-lg bg-white text-black font-semibold mt-4"
      >
        Remove
      </button>
    </div>
  );
}

export default StateArr;
