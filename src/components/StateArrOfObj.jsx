import React, { useState } from "react";

function StateArrOfObj() {
  const [val, setVal] = useState([
    { name: "Kutta", age: 10 },
    { name: "Billa", age: 8 },
    { name: "Bandar", age: 3 },
  ]);

  return (
    <div className="text-center">
      {val.map((elem, idx) => {
        return (
          <h1
            key={idx}
            className={`py-2 ${
              idx === 2 ? "bg-blue-900 rounded-full" : "bg-transparent"
            } ${
              idx === 2 && elem.age % 6 === 0 ? "bg-red-900" : "bg-blue-900"
            }`}
          >
            {`${elem.name} : ${elem.age}`}
          </h1>
        );
      })}
      <button
        onClick={() =>
          setVal(() =>
            val.map((elem) =>
              elem.name === "Bandar"
                ? { name: "Bandar", age: elem.age + 3 }
                : elem
            )
          )
        }
        className="uppercase px-8 py-3 rounded-lg bg-white text-black font-semibold mt-4"
      >
        Update
      </button>
    </div>
  );
}

export default StateArrOfObj;
