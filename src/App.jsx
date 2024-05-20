import React, { useEffect } from "react";
import PropDrilling from "./components/PropDrilling/PropDrilling";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-full">
      <PropDrilling />
    </div>
  );
}

export default App;
