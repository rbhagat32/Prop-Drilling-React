import React from "react";

function Card() {
  // (1) Component Reusability by mapping the data.
  // (2) Conditional Rendering of data and classes.
  // (3) Event Handling.

  const data = [
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "First",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sed.",
      isOpen: true,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1714673375180-f859c6313f64?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Second",
      desc: "Lorem ipsum dolor sit amet consectetur teri pan da fudda",
      isOpen: false,
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1709311441555-3452b72be1ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Third",
      desc: "lulli hoti ni khadi, baatein badi badi, aahhhhh ooo yeah baby",
      isOpen: true,
    },
  ];

  const handleClick = () => {
    alert("You Clicked Me Bitch !");
  };

  return (
    <>
      {/* Mapping the data. */}
      {data.map((elem, idx) => (
        <div
          // to avoid warnings in console.
          key={idx}
          className="w-96 h-[570px] text-center bg-zinc-900 text-white p-4 rounded-xl shadow-lg border-2"
        >
          <img
            className="h-80 w-80 mx-auto mt-3 object-cover rounded-xl"
            src={elem.imgSrc}
          />
          <h1 className="text-2xl font-bold mt-6">{elem.title}</h1>
          <p className="text-lg mt-2">{elem.desc}</p>
          {/* Event Handling */}
          <button
            onClick={handleClick}
            // Conditional Rendering of classes.
            className={`uppercase px-8 py-3 rounded-xl ${
              elem.isOpen ? "bg-white" : "bg-rose-500"
            } mt-4 text-black text-2xl font-semibold`}
          >
            {/* Conditional Rendering of data. */}
            {elem.isOpen ? "Open" : "Close"}
          </button>
        </div>
      ))}
    </>
  );
}

export default Card;
