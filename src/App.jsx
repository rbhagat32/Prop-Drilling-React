import React from "react";
import Card from "./components/Card";
import State from "./components/State";
import StateArr from "./components/StateArr";
import StateArrOfObj from "./components/StateArrOfObj";
import PropDrilling from "./components/PropDrilling/PropDrilling";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-white bg-zinc-950 gap-10">
      {/* <Card /> */}
      {/* <State /> */}
      {/* <StateArr /> */}
      {/* <StateArrOfObj /> */}
      <PropDrilling />
    </div>
  );
}

export default App;
