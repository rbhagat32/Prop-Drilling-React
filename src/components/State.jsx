import React, { useState } from "react";

function State() {
  // useState with objects.
  const [val, setVal] = useState({ name: "Guggu", canPlay: true });

  return (
    <div className="text-center">
      <h1
        className={`mb-5 text-4xl px-4 py-2 rounded-full ${
          val.canPlay ? "bg-blue-900" : "bg-red-900"
        }`}
      >{`${val.name} can ${val.canPlay ? "play." : "not play."}`}</h1>
      <button
        onClick={() => setVal({ ...val, canPlay: !val.canPlay })} // in reference type states (eg-object in this case), we can't directly use val object inside setVal otherwise it won't remember previous state and throw errors. So, we have to use ...(spread) operator to first create a deepcopy of the object and then after comma we can change whatever value we need to change in the new object (eg- canPlay: !val.canPlay)
        className="uppercase px-8 py-3 rounded-lg bg-white text-black font-semibold"
      >
        Change
      </button>
    </div>
  );
}

export default State;
